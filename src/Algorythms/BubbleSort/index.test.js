const bubbleSort = require('./index');

describe('--- Bubble Sorting ---', () => {
  test('positive numbers', async () => {
    expect(bubbleSort([5,1,9,4])).toEqual([1,4,5,9]);
    expect(bubbleSort([59018,1463,9166,473178])).toEqual([1463, 9166, 59018, 473178]);
  });

  test('negative numbers', async () => {
    expect(bubbleSort([-5,-1,-9,-4])).toEqual([-9,-5,-4,-1]);
    expect(bubbleSort([-59018,-1463,9166,-473178])).toEqual([-473178,-59018,-1463,9166]);
  });
});
