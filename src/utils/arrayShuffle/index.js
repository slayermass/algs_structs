/**
 * простое перемешивание массива
 * @param array
 * @returns array
 */
const arrayShuffle = (array) => {
  const arr = [...array];

  for (let currentIndex = arr.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
  }

  return arr;
}

module.exports = arrayShuffle;
