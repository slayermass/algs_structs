const mergeSort = require('./index');

describe('--- Merge Sorting ---',() => {
  test('positive numbers', () => {
    expect(mergeSort(
      [42,13,8,11,30,17,41,15,43,1,36,9,16,20,35,5,14,44,40,3,7,4,45,39,23,2]
    )).toEqual(
      [1,2,3,4,5,7,8,9,11,13,14,15,16,17,20,23,30,35,36,39,40,41,42,43,44,45]
    );
  });

  test('negative numbers', () => {
    expect(mergeSort(
      [-5,-46,-253,-3,-8,-8,-8,-1]
    )).toEqual(
      [-253,-46,-8,-8,-8,-5,-3,-1]
    );
  });
});
