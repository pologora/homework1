const { removeZeroAtStart } = require('../helpers/helpers.js');

require('../app.js');

exports.multiply = function multiply(str2) {
  const len1 = this.length;
  const len2 = str2.length;
  const result = Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      const multiply = Number(this[i]) * Number(str2[j]);
      const sum = multiply + result[i + j + 1];

      result[i + j] += Math.floor(sum / 10);
      result[i + j + 1] = sum % 10;
    }
  }

  return removeZeroAtStart(result.join(''));
};
