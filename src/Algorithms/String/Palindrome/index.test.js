const {isPalindrome, isPalindromeToLower} = require('./index');

describe('--- isPalindrome ---', () => {
  test('valid', () => {
    expect(isPalindrome('ABOBA')).toEqual(true);
    expect(isPalindrome('KOTTTOK')).toEqual(true);
    expect(isPalindrome('racecar')).toEqual(true);

    expect(isPalindromeToLower('ABOBA')).toEqual(true);
    expect(isPalindromeToLower('KOTTTOK')).toEqual(true);
    expect(isPalindromeToLower('racecar')).toEqual(true);
  });

  test('invalid', () => {
    expect(isPalindrome('^BBB')).toEqual(false);
    expect(isPalindrome('ABOBAC')).toEqual(false);
    expect(isPalindrome('')).toEqual(false);
    expect(isPalindrome('----')).toEqual(false);
    expect(isPalindrome('445544')).toEqual(false);

    expect(isPalindromeToLower('^BBB')).toEqual(false);
    expect(isPalindromeToLower('ABOBAC')).toEqual(false);
    expect(isPalindromeToLower('')).toEqual(false);
    expect(isPalindromeToLower('----')).toEqual(false);
    expect(isPalindromeToLower('445544')).toEqual(false);
  });

  test('valid but different case', () => {
    expect(isPalindrome('ABoba')).toEqual(false);
    expect(isPalindrome('RAcecAr')).toEqual(false);

    expect(isPalindromeToLower('ABoba')).toEqual(true);
    expect(isPalindromeToLower('RAcecAr')).toEqual(true);
  });
});
