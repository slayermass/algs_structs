const { binarySearchRecursive, binarySearchLoop } = require('./index');

describe('--- binarySearchRecursive ---', () => {
  test('found values', () => {
    expect(binarySearchRecursive([1,2,3,4,5], 4)).toEqual(4);
    expect(binarySearchRecursive([1,2,3,4,5,6], 1)).toEqual(1);
    expect(binarySearchRecursive([1], 1)).toEqual(1);
  });

  test('no found values', () => {
    expect(binarySearchRecursive([1,2,3,4,5], 50)).toEqual('not found');
    expect(binarySearchRecursive([1,2,3,4,5,6], 11)).toEqual('not found');
    expect(binarySearchRecursive([1], -1)).toEqual('not found');
  });

  test('negative values', () => {
    expect(binarySearchRecursive([-5,-4,-3,-2,-1], 50)).toEqual('not found');
    expect(binarySearchRecursive([-6, -5,-4,-3,-2,-1], 11)).toEqual('not found');
  });
});


describe('--- binarySearchLoop ---', () => {
  test('found values', () => {
    expect(binarySearchLoop([1,2,3,4,5], 4)).toEqual(4);
    expect(binarySearchLoop([1,2,3,4,5,6], 1)).toEqual(1);
    expect(binarySearchLoop([1], 1)).toEqual(1);
  });

  test('no found values', () => {
    expect(binarySearchLoop([1,2,3,4,5], 50)).toEqual('not found');
    expect(binarySearchLoop([1,2,3,4,5,6], 11)).toEqual('not found');
    expect(binarySearchLoop([1], -1)).toEqual('not found');
  });

  test('negative values', () => {
    expect(binarySearchLoop([-5,-4,-3,-2,-1], 50)).toEqual('not found');
    expect(binarySearchLoop([-6, -5,-4,-3,-2,-1], 11)).toEqual('not found');
  });
});
