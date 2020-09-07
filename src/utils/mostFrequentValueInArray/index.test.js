const mostFrequentValueInArray = require('./index');

describe('--- mostFrequentValueInArray ---', () => {
  test('simple test', () => {
    expect(mostFrequentValueInArray([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])).toEqual({'a': 5});
    expect(mostFrequentValueInArray([1,1,1, undefined, undefined, undefined, undefined])).toEqual({1: 3});
    expect(mostFrequentValueInArray(['1', 2])).toEqual({1: 1});
    expect(mostFrequentValueInArray([])).toEqual(undefined);
    expect(mostFrequentValueInArray([null, null, '6'])).toEqual({null: 2});
  });
});
