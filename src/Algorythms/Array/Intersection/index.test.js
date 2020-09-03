const arrayIntersect = require('./index');

describe('--- arrayIntersect ---', () => {
  test('empty array', () => {
    expect(arrayIntersect([], [2,2,2,2])).toEqual([]);
    expect(arrayIntersect([2,2,2,2], [])).toEqual([]);
    expect(arrayIntersect([], [])).toEqual([]);
  });

  test('no intersection', () => {
    expect(arrayIntersect([1], [2])).toEqual([]);
  });

  test('positive values', () => {
    expect(arrayIntersect([1,2,2,4,2], [2,2,2,2])).toEqual([2,2]);
    expect(arrayIntersect([2,2,2,2], [1,2,2,4,2])).toEqual([2,2]);
    expect(arrayIntersect([223,666,23525,223], [1,223,222,4,2352253])).toEqual([223]);
  });

  test('negative values', () => {
    expect(arrayIntersect([-10,-5,-2,0,2], [-6,-5,-1,3,8])).toEqual([-5]);
  });
});
