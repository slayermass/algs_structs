/**
 * функция проверки пустоты значения передаваемого аргумента
 */
const isEmptyValue = (val) => {
  if (val === null || val === undefined || val === false || val === '') {
    return true;
  }

  if (typeof val === 'object') {
    const strType = toString.call(val);
    // []
    if (strType === '[object Array]' && val.length === 0) {
      return true;
    }
    // {}
    if (strType === '[object Object]' && Object.getOwnPropertyNames(val).length === 0) {
      return true;
    }
    // new Set([]) | new Map([])
    if ((strType === '[object Set]' || strType === '[object Map]') && val.size === 0) {
      return true;
    }
    // new Error()
    if (strType === '[object Error]' && val.message === '') {
      return true;
    }
  }
  return false;
}

module.exports = isEmptyValue;
