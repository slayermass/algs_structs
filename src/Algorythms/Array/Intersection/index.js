/**
 * Пересечение массивов
 * массивы должны быть отсортированы по возрастанию
 *
 * последовательный перебор элементов двух массивов
 * [1,2,2,5] [2,2,6,7]
 * 1<2
 * 2===2
 * 2===2
 * 5<6 (первый массив закончился, больше совпадений не будет)
 */

const arrayIntersect = (arr1, arr2) => {
  if (!arr1.length || !arr2.length) {
    return [];
  }

  const returnArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else {
      returnArr.push(arr1[i]);
      i++;
      j++;
    }
  }

  return returnArr;
}

module.exports = arrayIntersect;

/**
 // неверное популярное решение
 const f = (arr1, arr2) => arr1.filter(x => arr2.includes(x));
 console.log(f([1, 2, 2, 4, 2], [2, 2, 2, 2])); // [ 2, 2, 2 ]
 console.log(f([2, 2, 2, 2], [1, 2, 2, 4, 2])); // [ 2, 2, 2, 2 ] !
 */

/**
 // неверное решение через Set
 const f = (arr1, arr2) => {
    const arr = [];
    const uniq = new Set(arr2);
    arr1.forEach((a) => {
      if (uniq.has(a)) {
        arr.push(a);
      }
    });
    return arr;
  }
 console.log(f([1,2,2,4], [2,2,2,2])); // [2,2]
 console.log(f([2,2,2,2], [1,2,2,4])); // [2,2,2,2] !
 console.log(f([1,5,9,500], [5,6,7,9,666])); // [5,9]
 */
