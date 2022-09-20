/**
 * checks if a given string is a palindrome
 *
 * @param string
 * @returns {boolean}
 */
const isPalindrome = (string) => {
  if (!/^[A-Za-z]+$/.test(string)) { // only letter strings
    return false
  }

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }

  return true;
}

module.exports = isPalindrome
