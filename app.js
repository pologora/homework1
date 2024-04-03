const { isBiggerOrEq, isSmallerThan } = require('./helpers/helpers.js');
const { add } = require('./operations/add.js');
const { divide } = require('./operations/divide.js');
const { multiply } = require('./operations/multiply.js');
const { subtract } = require('./operations/subtract.js');

String.prototype.plus = add;
String.prototype.minus = subtract;
String.prototype.divide = divide;
String.prototype.multiply = multiply;
String.prototype.isBiggerOrEq = isBiggerOrEq;
String.prototype.isSmallerThan = isSmallerThan;
