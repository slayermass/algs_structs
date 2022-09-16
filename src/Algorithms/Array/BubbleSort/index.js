/**
 * сортировка пузырьком (всплытие) (bubbling)
 * сравнение соседних элементов и перемена их местами
 *
 * сложность  - О(n2)
 * память     - O(1)
 */
const bubbleSort = (arr) => {
  // клонировать arr? сейчас мутирует
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

module.exports = bubbleSort;
