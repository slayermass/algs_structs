const arrayQuickSort = require('./index');
const {getArrayFilledRandomIntegers, sortIntegerArray} = require('../../../utils/miscellaneous');


describe('--- arrayQuickSort ---', () => {
  test('base', () => {
    expect(arrayQuickSort([20, 500, 3, 80, 66, 42])).toEqual([3, 20, 42, 66, 80, 500]);
    expect(arrayQuickSort([
      1298, 2, 2677, 2681, 3600, 3796, 42, 4430, 714, 819
    ])).toEqual([
      2, 42, 714, 819, 1298, 2677, 2681, 3600, 3796, 4430
    ]);
  });

  test('with duplicates', () => {
    expect(arrayQuickSort([20, 20, 500, 3, 80, 66, 42])).toEqual([3, 20, 20, 42, 66, 80, 500]);
    expect(arrayQuickSort([16, 16, 160, 160, 55, 14, 898])).toEqual([14, 16, 16, 55, 160, 160, 898]);
  });

  test('base generate', () => {
    for (let i = 0; i < 50; i++) {
      const arr = getArrayFilledRandomIntegers(100);

      expect(arrayQuickSort(arr)).toEqual(sortIntegerArray(arr));
    }
  });
});
