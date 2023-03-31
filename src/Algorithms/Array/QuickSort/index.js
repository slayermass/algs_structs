/**
 * quick sort
 *
 * сложность  - О(n log n) | O(n*n) - худшее
 * память     - ?
 */
const arrayQuickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } else {
    const pivot = arr[Math.floor(arr.length / 2)]; // опорный элемент может быть любым

    const pivotArr = [] // хранить доп массив чисел, идентичных pivot (повторы)
    const smallerElementsArr = []
    const biggerElementsArr = [];

    arr.forEach((item) => {
      if (item > pivot) {
        biggerElementsArr.push(item);
      } else if (pivot > item) {
        smallerElementsArr.push(item);
      } else {
        pivotArr.push(item);
      }
    });

    return [...arrayQuickSort(smallerElementsArr), ...pivotArr, ...arrayQuickSort(biggerElementsArr)];
  }
}

module.exports = arrayQuickSort;
