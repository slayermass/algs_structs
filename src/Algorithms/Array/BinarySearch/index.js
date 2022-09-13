/**
 * двоичный(бинарный) поиск
 * arr должен быть отсортирован по возрастанию ASC
 *
 * сложность  - O(log n)
 * память     - O(n)
 */

/** счетчики для подсчета итераций */
let bsrCount = 0;
const clearBSRCount = () => bsrCount = 0;
const getBSRCount = () => bsrCount;

let bslCount = 0;
const clearBSLCount = () => bslCount = 0;
const getBSLCount = () => bslCount;

/** рекурсивный поиск */
const binarySearchRecursive = (arr, val) => {
  const middle = Math.floor(arr.length / 2); // important as Math.ceil([1].length / 2 (0.5)]) = 1
  const middleVal = arr[middle];

  bsrCount += 1;

  if (middleVal === val) {
    return middleVal;
  }

  if (arr.length > 1) {
    let start = 0; // left меньше
    let end = middle;

    if (val > middleVal) { // right больше
      start = middle;
      end = Number.MAX_VALUE;
    }

    return binarySearchRecursive(arr.splice(start, end), val);
  }

  return 'not found';
};

/** поиск с циклом while, изменение условия на каждой итерации */
const binarySearchLoop = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);
    const middleVal = arr[middle];
    bslCount += 1;

    if (middleVal === val) {
      return middleVal;
    }

    if (val < middleVal) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return 'not found';
}

module.exports = {
  binarySearchRecursive, getBSRCount, clearBSRCount,
  binarySearchLoop, getBSLCount, clearBSLCount,
};
