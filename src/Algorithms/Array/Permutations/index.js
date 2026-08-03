// todo find a better solution
var permuteArr = function (nums) {
  var arrWithoutElement = (arr, i) => [...arr.slice(0, i), ...arr.slice(i + 1)];

  var fn = (arr) => {
    if (arr.length === 1) {
      return [arr];
    }

    if (arr.length === 2) {
      return [
        [arr[0], arr[1]],
        [arr[1], arr[0]],
      ]
    }

    var res = [];

    for (let i = 0; i < arr.length; i++) {
      var arrStr = fn(arrWithoutElement(arr, i));

      for (let j = 0; j < arrStr.length; j++) {
        res.push(
          [arr[i], ...arrStr[j]]
        );
      }
    }

    return res
  }

  return fn(nums)
};

module.exports = permuteArr;
