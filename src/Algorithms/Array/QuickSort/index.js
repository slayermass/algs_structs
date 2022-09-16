/**
 * quick sort
 *
 * сложность  - О(n log n) | O(n*n) - худшее
 * память     - ?
 */
const arrayQuickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[0]; // опорный элемент может быть любым
    const pivotArr = arr.filter((v) => v === pivot);// [отличие 1] хранить доп массив

    const smallerElementsArr = arr.filter((elem) => elem < pivot);
    const biggerElementsArr = arr.filter((elem) => elem > pivot);

    return [...arrayQuickSort(smallerElementsArr), ...pivotArr, ...arrayQuickSort(biggerElementsArr)];
  }
}

module.exports = arrayQuickSort;
