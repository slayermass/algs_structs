/**
 * являются ли 2 строки анаграммами
 *
 * пробелы играют роль?
 *
 * сложность  - O(n)
 * память     - O(n)
 *
 * @param str1 {string}
 * @param str2 {string}
 * @returns {boolean}
 */
const areAnagrams = (str1, str2) => {
  // строки пустые или разной длины
  if (str1.length !== str2.length || (str1.length === 0 && str2.length === 0)) {
    return false;
  }

  const sortPrepareString = (str) => str.replace(/\s+/, '').toLowerCase().split('').sort().join('');

  return sortPrepareString(str1) === sortPrepareString(str2);
}

module.exports = areAnagrams;
