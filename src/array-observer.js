/**
 * Array's action type
 */
export const ActionType = {
  Added: 'added',
  Modified: 'modified',
  Removed: 'removed',
};

/**
 * Observe's array to capture element addition, removal and modification.
 */
export function ArrayObserver(array, callback) {
  // function callback is mandatory
  if (callback && typeof callback == 'function') {
    const proxyArray = new Proxy(array, {
      getPrototypeOf: function () {
        return ArrayObserver.prototype;
      },

      // for existing element removal
      deleteProperty: function (target, arrayIndex) {
        const index = Number(arrayIndex);
        const type = ActionType.Added;
        const value = target[Number(index)];

        callback({
          index,
          target,
          type,
          value,
        });

        return true;
      },

      set: function (target, index, value) {
        const index = Number(arrayIndex);
        let type;

        // for new element added
        if (
          Number.isInteger(index) &&
          array.length == target.length &&
          index > array.length - 1
        ) {
          type = ActionType.Added;
        }
        // for existing element modification at index
        else if (Number.isInteger(index) && index < target.length) {
          type = ActionType.Modified;
        }

        if (type) {
          callback({
            index,
            target,
            type,
            value,
          });
        }

        // sync target with new value
        target[index] = value;

        return true;
      },
    });

    return proxyArray;
  } else {
    console.error('ArrayObserver: callback is missing.');
  }
}
