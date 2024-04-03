require('../app.js');

exports.divide = function divide(b) {
  if (b == 0) {
    throw new Error(`Don't do that! You can't divide by 0`);
  }

  let quotient = '0';
  let dividend = this;
  let divisor = b;

  while (dividend.isBiggerOrEq(divisor)) {
    dividend = dividend.minus(divisor);
    quotient = quotient.plus('1');
  }

  return quotient;
};
