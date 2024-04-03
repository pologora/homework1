const { removeZeroAtStart } = require('../helpers/helpers.js');

require('../app.js');

exports.divide = function divide(divisor) {
  if (removeZeroAtStart(divisor) == 0) {
    throw new Error('Dont divide by 0');
  }

  const dividend = this;
  let quotient = '';
  let tempDividend = '';
  let product = '0';

  for (let i = 0; i < dividend.length; i++) {
    tempDividend = tempDividend + dividend[i];
    let tempDivisor = divisor;

    if (tempDividend.isBiggerOrEq(divisor)) {
      while (tempDividend.isBiggerOrEq(tempDivisor)) {
        product = product.plus('1');
        tempDivisor = tempDivisor.plus(divisor);
      }

      tempDividend = tempDividend.minus(divisor.multiply(product));
    }

    quotient += product;
    product = '0';
  }

  return removeZeroAtStart(quotient);
};
