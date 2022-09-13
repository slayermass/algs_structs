/**
 * сжатие строки
 *
 * @param str {string}
 * @returns {string}
 */
const RLEEncode = (str) => {
  if (!/^[A-Z]+$/.test(str)) {
    return 'invalid string';
  }

  let result = '';
  let counter = 0

  for (let i = 0; i <= str.length; ++i) {
    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      result += `${str[i]}${(counter ? counter + 1 : '')}`;
      counter = 0;
    }
  }
  return result;
}

/**
 * разжатие строки
 *
 * @param str {string}
 * @returns {string}
 */
const RLEDecode = (str) => {
  // TODO
  return str
}

module.exports = {RLEEncode, RLEDecode}
