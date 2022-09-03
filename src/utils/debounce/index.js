/**
 * откладывание вызова передаваемой функции если вызывается декоратор пока ms не прошли
 *
 * @param fn {function}
 * @param ms {number}
 * @returns {(function() | void)}
 */
const debounce = (fn, ms) => {
  let timer;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, ms);
  }
}

module.exports = debounce;
