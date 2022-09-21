/**
 * @returns {number}
 */
const getRandomInteger = () => {
  const maximum = 5000;
  const minimum = 1;

  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

/**
 * @param arrayLength {number}
 * @returns {number[]}
 */
const getArrayFilledRandomIntegers = (arrayLength) => new Array(arrayLength).fill(1).map(getRandomInteger);

/**
 * sorts an array of number
 * @param arr {number[]}
 * @param removeDuplicates {boolean}
 * @returns {number[]}
 */
const sortIntegerArray = (arr, removeDuplicates = false) => removeDuplicates ? [...new Set(new Uint16Array(arr).sort())] : arr.sort((a, b) => a - b);

module.exports = {
  getRandomInteger,
  getArrayFilledRandomIntegers,
  sortIntegerArray
}
