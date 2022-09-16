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

  // на последней итерации (anychar === undefined) всегда заходит в else
  for (let i = 0; i <= str.length -1; i++) {
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
  if (!/^[A-Z0-9]+$/.test(str) || /^[0-9]/.test(str)) {
    return 'invalid string';
  }

  // массив из символов по 1
  const chars = str.split(/[0-9]+/).filter((v) => v).join('').split('');
  // массив из чисел по 1 соответствующий символам
  const numbers = str.split(/[A-Z]/);
  numbers.shift(); // удалить пустую строку

  // символов всегда больше и надо к ним подбирать число
  return chars.reduce((result, char, index) => {
    result += (numbers[index]) ? `${new Array(Number(numbers[index])).fill(char).join('')}` : char;

    return result
  }, '');
}

module.exports = {RLEEncode, RLEDecode}
