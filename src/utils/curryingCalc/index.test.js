const curryingCalc = require('./index');

describe('--- curryingCalc ---', () => {
  test('correct', () => {
    expect(+curryingCalc(1)(2)(3)(4) === 10).toBe(true);
    expect(+curryingCalc(1) === 1).toBe(true);
  });

  test('incorrect', () => {
    expect(+curryingCalc(1)(2)(3)(4)(7) === 10).toBe(false);
    expect(+curryingCalc(2)(5) === 1).toBe(false);
  });
});
