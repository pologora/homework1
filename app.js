import { add } from './add.js';

const bigIntString1 = '123456789012345678901234567890123456789025';
const bigIntString2 = '9876543210987654321098765432109876543210';

const bitInt1 = BigInt(bigIntString1);
const bitInt2 = BigInt(bigIntString2);

console.log(add(bigIntString1, bigIntString2));
