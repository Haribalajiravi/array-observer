'use strict';

/**
 * Array's action type
 */
const ActionType = {
  Added: 'added',
  Modified: 'modified',
  Removed: 'removed'
};

/**
 * Observe's array to capture element addition, removal and modification.
 */
function observer(array, callback) { 
  // function callback is mandatory
  if (callback && typeof callback == 'function') {
    const proxyArray = new Proxy(array, {
      getPrototypeOf() {
        return observer.prototype;
      },

      // for existing element removal
      deleteProperty(targetArray, arrayIndex) {
        const index = Number(arrayIndex);
        const type = ActionType.Removed;
        const value = targetArray[index];

        // make a new copy to avoid array refferencing
        const target = [...targetArray];

        callback({
          index,
          target,
          type,
          value
        });

        return true;
      },

      set(targetArray, arrayIndex, value) {
        const index = Number(arrayIndex);
        let type;

        // for new element added
        if (
          Number.isInteger(index) &&
          array.length == targetArray.length &&
          index > array.length - 1
        ) {
          type = ActionType.Added;
        }
        // for existing element modification at index
        else if (Number.isInteger(index) && index < targetArray.length) {
          type = ActionType.Modified;
        }

        // sync targetArray with new value
        targetArray[arrayIndex] = value;

        if (type) {
          // make a new copy to avoid array refferencing
          const target = [...targetArray];

          callback({
            index,
            target,
            type,
            value
          });
        }

        return true;
      }
    });

    return proxyArray;
  } else {
    console.error('observer: callback is missing.');
  }
}

exports.ActionType = ActionType;
exports.observer = observer;
