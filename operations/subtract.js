const { addZero, removeZeroAtStart } = require('../helpers/helpers');
require('../app.js');

exports.subtract = function subtract(str2) {
  if (!this.isBiggerOrEq(str2)) {
    throw new Error('First number should be bigger than second!');
  }

  const [a, b] = addZero(this, str2);

  let result = '';
  let remember = 0;

  for (let i = a.length - 1; i >= 0; i--) {
    const num1 = Number(a[i]) - remember;
    const num2 = Number(b[i]);
    let subtract;

    if (num1 >= num2) {
      subtract = num1 - num2;
      remember = 0;
    } else {
      subtract = num1 + 10 - num2;
      remember = 1;
    }

    result = subtract + result;
  }

  return removeZeroAtStart(result);
};
