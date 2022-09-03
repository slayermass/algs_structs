const debounce = require('./index');

jest.useFakeTimers();

describe('--- debounce ---', () => {
  test('correct', () => {
    const callback = jest.fn();

    const fn = debounce(callback, 500);

    fn();
    fn();
    fn();

    expect(callback).not.toBeCalled();

    jest.runAllTimers(); // здесь уже время ожидания вышло

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
