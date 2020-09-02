/**
 * двоичный(бинарный) поиск
 * arr должен быть отсортирован
 */

/** рекурсивный поиск */
const binarySearchRecursive = (arr, val) => {
  const middle = Math.floor(arr.length / 2);
  const middleVal = arr[middle];

  if (middleVal === val) {
    return middleVal;
  } else if (val < middleVal && arr.length > 1) {
    return binarySearchRecursive(arr.splice(0, middle), val);
  } else if (val > middleVal && arr.length > 1) {
    return binarySearchRecursive(arr.splice(middle, Number.MAX_VALUE), val);
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

module.exports = { binarySearchRecursive, binarySearchLoop };
