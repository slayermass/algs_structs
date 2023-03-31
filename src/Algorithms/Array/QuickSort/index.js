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
    const pivot = arr[0]; // опорный элемент может быть любым
    const pivotArr = arr.filter((v) => v === pivot);// [отличие 1] хранить доп массив

    const smallerElementsArr = []
    const biggerElementsArr = [];

    arr.forEach((item) => {
      if (item > pivot) {
        biggerElementsArr.push(item);
      } else if (pivot > item){
        smallerElementsArr.push(item);
      }
    });

    return [...arrayQuickSort(smallerElementsArr), ...pivotArr, ...arrayQuickSort(biggerElementsArr)];
  }
}

module.exports = arrayQuickSort;
