const {
  binarySearchRecursive, getBSRCount, clearBSRCount,
  binarySearchLoop, getBSLCount, clearBSLCount,
} = require('./index');

describe('--- binarySearchRecursive ---', () => {
  test('found values', () => {
    expect(binarySearchRecursive([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4)).toEqual(4);
    expect(getBSRCount()).toBe(4);

    clearBSRCount();
    expect(binarySearchRecursive([1,2,3,4,5,6], 1)).toEqual(1);
    expect(getBSRCount()).toBe(3);

    clearBSRCount();
    expect(binarySearchRecursive([1], 1)).toEqual(1);
    expect(getBSRCount()).toBe(1);
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
    expect(binarySearchLoop([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 4)).toEqual(4);
    expect(getBSLCount()).toBe(2);

    clearBSLCount();
    expect(binarySearchLoop([1,2,3,4,5,6], 1)).toEqual(1);
    expect(getBSLCount()).toBe(2);

    clearBSLCount();
    expect(binarySearchLoop([1], 1)).toEqual(1);
    expect(getBSLCount()).toBe(1);
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
