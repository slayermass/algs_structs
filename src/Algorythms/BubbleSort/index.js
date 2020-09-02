/**
 * сортировка пузырьком (всплытие) (bubbling)
 * сравнение соседних элементов и перемена их местами
 *
 * сложность  - О(n2)
 * память     - O(1)
 */
const bubbleSort = (arr) => {
  const ret = arr;
  for (let j = ret.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (ret[i] > ret[i + 1]) {
        let temp = ret[i];
        ret[i] = ret[i + 1];
        ret[i + 1] = temp;
      }
    }
  }
  return ret;
}

module.exports = bubbleSort;
