import { ActionType, observer } from '../src/array-observer';
import { expect, test } from '@jest/globals';

test('Initializing successfully', () => {
  const oddNumbers = [1, 3, 5, 7, 9];
  const proxyOddNumbers = observer(oddNumbers, () => {});
  expect(proxyOddNumbers).toEqual(oddNumbers);
});

/**
 * BELOW CASES WILL COVER ALL MUTATOR ARRAY METHODS
 */

// It sorts the elements of an array.
test('sort()', () => {
  const oddNumbers = [1, 3];
  const results = [];
  const proxyOddNumbers = observer(oddNumbers, (data) => {
    results.push(data);
  });
  proxyOddNumbers.sort((a, b) => b - a);
  expect(results).toEqual([
    {
      index: 0,
      target: [3, 3],
      type: ActionType.Modified,
      value: 3
    },
    {
      index: 1,
      target: [3, 1],
      type: ActionType.Modified,
      value: 1
    }
  ]);
  expect(oddNumbers).toEqual([3, 1]);
  expect(proxyOddNumbers).toEqual([3, 1]);
});

// It adds one or more elements to the beginning of an array.
test('unshift()', () => {
  const oddNumbers = [1, 3];
  const results = [];
  const proxyOddNumbers = observer(oddNumbers, (data) => {
    results.push(data);
  });
  proxyOddNumbers.unshift(23);
  expect(results).toEqual([
    { index: 2, target: [1, 3, 3], type: ActionType.Added, value: 3 },
    { index: 1, target: [1, 1, 3], type: ActionType.Modified, value: 1 },
    { index: 0, target: [23, 1, 3], type: ActionType.Modified, value: 23 }
  ]);
  expect(oddNumbers).toEqual([23, 1, 3]);
  expect(proxyOddNumbers).toEqual([23, 1, 3]);
});

// It removes the first element from an array.
test('shift()', () => {
  const oddNumbers = [1, 3];
  const results = [];
  const proxyOddNumbers = observer(oddNumbers, (data) => {
    results.push(data);
  });
  proxyOddNumbers.shift();
  expect(results).toEqual([
    { index: 0, target: [3, 3], type: ActionType.Modified, value: 3 },
    { index: 1, target: [3, 3], type: ActionType.Removed, value: 3 }
  ]);
  expect(oddNumbers).toEqual([3]);
  expect(proxyOddNumbers).toEqual([3]);
});

// It removes or replaces existing elements and/or adds new elements.
test('splice()', () => {
  const oddNumbers = [1, 3];
  const results = [];
  const proxyOddNumbers = observer(oddNumbers, (data) => {
    results.push(data);
  });
  proxyOddNumbers.splice(0, 2, 8, 9, 10);
  expect(results).toEqual([
    { index: 0, target: [8, 3], type: ActionType.Modified, value: 8 },
    { index: 1, target: [8, 9], type: ActionType.Modified, value: 9 },
    { index: 2, target: [8, 9, 10], type: ActionType.Added, value: 10 }
  ]);
  expect(oddNumbers).toEqual([8, 9, 10]);
  expect(proxyOddNumbers).toEqual([8, 9, 10]);
});

// It adds one or more elements to the end of an array.
test('push()', () => {
  const oddNumbers = [1, 3];
  const results = [];
  const proxyOddNumbers = observer(oddNumbers, (data) => {
    results.push(data);
  });
  proxyOddNumbers.push(5, 7);
  expect(results).toEqual([
    { index: 2, target: [1, 3, 5], type: ActionType.Added, value: 5 },
    { index: 3, target: [1, 3, 5, 7], type: ActionType.Added, value: 7 }
  ]);
  expect(oddNumbers).toEqual([1, 3, 5, 7]);
  expect(proxyOddNumbers).toEqual([1, 3, 5, 7]);
});

// It removes the last element from an array.
test('pop()', () => {
  const oddNumbers = [1, 3];
  const results = [];
  const proxyOddNumbers = observer(oddNumbers, (data) => {
    results.push(data);
  });
  proxyOddNumbers.pop();
  expect(results).toEqual([{ index: 1, target: [1, 3], type: ActionType.Removed, value: 3 }]);
  expect(oddNumbers).toEqual([1]);
  expect(proxyOddNumbers).toEqual([1]);
});

// It fills all the elements of an array with the same value.
test('fill()', () => {
  const oddNumbers = [1, 3];
  const results = [];
  const proxyOddNumbers = observer(oddNumbers, (data) => {
    results.push(data);
  });
  proxyOddNumbers.fill(0, 1);
  expect(results).toEqual([{ index: 1, target: [1, 0], type: ActionType.Modified, value: 0 }]);
  expect(oddNumbers).toEqual([1, 0]);
  expect(proxyOddNumbers).toEqual([1, 0]);
});
