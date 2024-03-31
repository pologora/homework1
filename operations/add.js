const { addZero } = require('../helpers/helpers');

exports.add = function add(b) {
  const [str1, str2] = addZero(this, b);

  let result = '';
  let remember = 0;

  for (let i = str1.length - 1; i >= 0; i--) {
    let sum = Number(str1[i]) + Number(str2[i]) + remember;

    if (sum >= 10) {
      remember = 1;
      sum = sum - 10;
    } else {
      remember = 0;
    }

    result = sum + result;
  }

  if (remember === 1) {
    result = '1' + result;
  }

  return result;
};
