/**
 * двоичный(бинарный) поиск
 * arr должен быть отсортирован
 */
const binarySearch = (arr, val) => {
  const middle = Math.floor(arr.length / 2);
  const middleVal = arr[middle];

  // console.log(middleVal, val);

  if (middleVal === val) {
    return middleVal;
  } else if (val < middleVal && arr.length > 1) {
    return binarySearch(arr.splice(0, middle), val);
  } else if (val > middleVal && arr.length > 1) {
    return binarySearch(arr.splice(middle, Number.MAX_VALUE), val);
  }
  return 'not found';
};

module.exports = binarySearch;
