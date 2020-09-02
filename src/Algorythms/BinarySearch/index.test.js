const binarySearch = require('./index');

describe('--- binarySearch ---', () => {
  test('found values', () => {
    expect(binarySearch([1,2,3,4,5], 4)).toEqual(4);
    expect(binarySearch([1,2,3,4,5,6], 1)).toEqual(1);
    expect(binarySearch([1], 1)).toEqual(1);
  });

  test('no found values', () => {
    expect(binarySearch([1,2,3,4,5], 50)).toEqual('not found');
    expect(binarySearch([1,2,3,4,5,6], 11)).toEqual('not found');
    expect(binarySearch([1], -1)).toEqual('not found');
  });

  test('negative values', () => {
    expect(binarySearch([-5,-4,-3,-2,-1], 50)).toEqual('not found');
    expect(binarySearch([-6, -5,-4,-3,-2,-1], 11)).toEqual('not found');
  });
});
