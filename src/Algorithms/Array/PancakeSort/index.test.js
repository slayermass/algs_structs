const pancakeSort = require('./index');

var toSort = (arrNum) => arrNum.sort((a, b) => a - b);

describe('--- pancakeSort ---', () => {
  test('valid', () => {
    expect(pancakeSort(toSort([3, 2, 4, 1]))).toEqual([1, 2, 3, 4]);
    expect(pancakeSort(toSort([1, 2, 3]))).toEqual([1, 2, 3]);
    expect(pancakeSort(toSort([3, 6, 1, 5, 2, 4]))).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('duplicate values', () => {
    expect(pancakeSort(toSort([30, 30, 1]))).toEqual([1, 30, 30]);
    expect(pancakeSort(toSort([-52, -52, -5, 1, 5335, 67, 67]))).toEqual([-52, -52, -5, 1, 67, 67, 5335]);
  });
});
