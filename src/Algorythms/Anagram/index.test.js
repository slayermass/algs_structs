const areAnagrams = require('./index');

describe('--- areAnagrams ---', () => {
  test('correct values', () => {
    expect(areAnagrams('listen', 'silent')).toBe(true);
    expect(areAnagrams('Listen', 'sIlent')).toBe(true);
    expect(areAnagrams('дерево', 'древоЕ')).toBe(true);
    expect(areAnagrams('lis ten', 's ilent')).toBe(true);
  });

  test('incorrect values', () => {
    expect(areAnagrams('listen', 'silents')).toBe(false);
    expect(areAnagrams('', '')).toBe(false);
    expect(areAnagrams('listen', 'silend')).toBe(false);
  });
});
