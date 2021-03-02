const arrayShuffle = require('./index');

/** кол-во элементов массива на свои местах */
const getSamePosInArrCount = (arr1, arr2) => {
  let samePosAmount = 0;

  for (let i = 0; i < arr1.length; i++) {
    // todo object comparison
    if (typeof arr1[i] === 'object') {

    } else if (arr1[i] === arr2[i]) {
      samePosAmount++;
    }
  }

  return samePosAmount
}

describe('--- array shuffle ---', () => {
  test('другой массив', () => {
    const arr = [1,2,3,4,5,6,7,8,9];
    expect(arrayShuffle(arr)).not.toBe(arr);
  });

  test('разный порядок элементовю примитивы', () => {
    const arrNum = [1,2,3,4,5,6,7,8,9];
    const arrStr = ['1','2','3','4','5','6','7','8','9'];

    expect(getSamePosInArrCount(arrNum, arrayShuffle(arrNum))).toBeLessThan(arrNum.length);
    expect(getSamePosInArrCount(arrStr, arrayShuffle(arrStr))).toBeLessThan(arrStr.length);
  });

  test('разный порядок элементов. объекты', () => {
    const arr = [{id: 1},{id: 2},{id: 3},{id: 4},{id: 5},{id: 6},{id: 7},{id: 8},{id: 9}];
    const resultArr = arrayShuffle(arr);

    expect(getSamePosInArrCount(arr, resultArr)).toBeLessThan(arr.length);
  });
});
