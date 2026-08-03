/**
 * | Поиск максимума       |        O(n) |
 * | Один flip             |        O(n) |
 * | Количество проходов   |           n |
 * | Общая сложность       |       O(n²) |
 * | Дополнительная память |        O(1) |
 */
var pancakeSort = function (arr) {
  var len = arr.length;

  var findMaxValueIndex = (arr, len) => {
    var maxValue = -Infinity;
    var index = -1;

    for (let i = 0; i < len; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
        index = i;
      }
    }

    return index;
  }

  var doFlip = (arr, tillIndex) => {
    var l = 0, r = tillIndex;

    while (l < r) {
      // swap
      var temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;

      l++;
      r--;
    }

    return arr
  }

  while (len) {
    var maxValueIndex = findMaxValueIndex(arr, len);

    if (maxValueIndex === len - 1) {
      len -= 1;
      continue;
    }

    arr = doFlip(arr, maxValueIndex); // max at the start
    arr = doFlip(arr, len - 1); // max at the end

    len -= 1;
  }

  return arr
};

module.exports = pancakeSort;
