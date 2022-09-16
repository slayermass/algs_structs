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

    const smallerElementsArr = arr.filter((elem) => elem < pivot);
    const biggerElementsArr = arr.filter((elem) => elem > pivot);

    return [...arrayQuickSort(smallerElementsArr), pivot, ...arrayQuickSort(biggerElementsArr)];
  }
}

const arrayQuickSortWorkingWithDuplicates = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else if (new Set(arr).size <= 2 && arr.length > 2) { // [отличие 1!]
    const anyFirstElement = [...new Set(arr)][0];

    // сокращенный вариант подготовки двух массивов
    const [left, right] = arr.reduce((acc, item) => {
      acc[item === anyFirstElement ? 0 : 1].push(item);

      return acc
    }, [[], []]);

    return left[0] > right [0] ? [...right, ...left] : [...left, ...right]
  } else {
    const pivot = arr[0]; // опорный элемент может быть любым
    const smallerElementsArr = arr.filter((elem) => elem < pivot);
    const biggerElementsArr = arr.filter((elem) => elem > pivot);

    // [отличие 2]
    // найти дубликаты опорной точки и добавить в (любой?) массив
    const founds = arr.filter((v) => v === pivot);
    if (founds.length > 1) {
      founds.pop(); // Удалить 1, т.к. 1 раз уже добавляется
      smallerElementsArr.push(...founds)
    }

    return [...arrayQuickSortWorkingWithDuplicates(smallerElementsArr), pivot, ...arrayQuickSortWorkingWithDuplicates(biggerElementsArr)];
  }
}

module.exports = {arrayQuickSort, arrayQuickSortWorkingWithDuplicates};
