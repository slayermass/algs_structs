// todo find a better solution
var permutationsStr = (str) => {
  var strWithoutChar = (str, i) => str.slice(0, i) + str.slice(i + 1);

  var fn = (str) => {
    if (str.length < 2) {
      return [str]
    }

    if (str.length === 2) {
      return [`${str[0]}${str[1]}`, `${str[1]}${str[0]}`]
    }

    var res = [];

    for (let i = 0; i < str.length; i++) {
      var arrStr = fn(strWithoutChar(str, i));

      for (let j = 0; j < arrStr.length; j++) {
        res.push(
          `${str[i]}${arrStr[j]}`,
        );
      }
    }

    return res.flat()
  }

  return fn(str)
}

module.exports = permutationsStr;
