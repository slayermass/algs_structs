/**
 * сложение чисел (рекурсивное|каррированное)
 * toString - важно. так же можно curryingCalc(1) == 1
 *
 * @param v {any}
 * @returns {any}
 */
const curryingCalc = (v) => {
  const innerFn = (x) => curryingCalc(v + x);

  innerFn.toString = () => v; // innerFn.valueOf ?

  return innerFn;
}

module.exports = curryingCalc;
