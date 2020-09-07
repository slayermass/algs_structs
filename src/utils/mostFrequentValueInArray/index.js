/**
 * функция нахождения самого частого элемента в массиве
 * возвращает значение и кол-во вхождений
 */
const mostFrequentValueInArray = (arr) => {
  let countMax = 1;
  let count = 0;
  let item = arr[0];
  const watchedItems = {};
  const innerArr = arr.filter((v) => v !== undefined);

  if (innerArr.length === 0) {
    return undefined;
  }

  for (let i = 0; i < innerArr.length; i++) {
    // пропускать уже просмотренные элементы(повторяющиеся значения)
    if (watchedItems[innerArr[i]]) {
      continue;
    }
    for (let j = i; j < innerArr.length; j++) {
      if (innerArr[i] === innerArr[j]) {
        count++;
      }
      if (countMax < count) {
        countMax = count;
        item = innerArr[i];
      }
      watchedItems[innerArr[i]] = 1;
    }
    count = 0;
  }

  return {[item]: countMax};
}

module.exports = mostFrequentValueInArray;
