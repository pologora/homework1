const { add } = require('./add.js');
const { divide } = require('./divide.js');
const { multiply } = require('./multiply.js');
const { substruct } = require('./substruct.js');

String.prototype.plus = add;
String.prototype.minus = substruct;
String.prototype.divide = divide;
String.prototype.multiply = multiply;

const bigIntString1 = '123456789012345678901234567890123456789025';
const bigIntString2 = '9876543210987654321098765432109876543210';

const bitInt1 = BigInt(bigIntString1);
const bitInt2 = BigInt(bigIntString2);

console.log(bigIntString1 > bigIntString2);

console.log('Sum: ', bigIntString1.plus(bigIntString2));
console.log('Sum: ', bitInt1 + bitInt2);
