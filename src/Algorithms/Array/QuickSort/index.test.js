const arrayQuickSort = require('./index');
const {getArrayFilledRandomIntegers, sortIntegerArray} = require('../../../utils/miscellaneous');

describe('--- arrayQuickSort ---', () => {
  test('base', () => {
    expect(arrayQuickSort([20, 500, 3, 80, 66, 42])).toEqual([3, 20, 42, 66, 80, 500]);
    expect(arrayQuickSort([-20, -8980980, 3, 80, 6600003, 0])).toEqual([-8980980, -20, 0, 3, 80, 6600003]);
    expect(arrayQuickSort([1298, 2, 2677, 2681, 3600, 3796, 42, 4430, 714, 819])).toEqual([2, 42, 714, 819, 1298, 2677, 2681, 3600, 3796, 4430]);
  });

  test('with duplicates', () => {
    expect(arrayQuickSort([20, 20, 500, 3, 80, 66, 42])).toEqual([3, 20, 20, 42, 66, 80, 500]);
    expect(arrayQuickSort([16, 16, 160, 160, 55, 14, 898])).toEqual([14, 16, 16, 55, 160, 160, 898]);
    expect(arrayQuickSort([1, 1, 1, 2, 2, 2, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7])).toEqual([1, 1, 1, 2, 2, 2, 5, 5, 5, 5, 5, 6, 7, 7, 7, 7, 7, 7]);
  });

  test('base generate', () => {
    for (let i = 0; i < 50; i++) {
      const arr = getArrayFilledRandomIntegers(100);

      expect(arrayQuickSort(arr)).toEqual(sortIntegerArray(arr));
    }
  });
});
