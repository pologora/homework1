require('../app.js');

const bigIntString1 = '123456789012345678901234567890123456789025';
const bigIntString2 = '9876543210987654321098765432109876543210';
const bigIntString3 = '999';
const bigIntString4 = '100';

describe('Multiply two numbers', () => {
  test('should correct multiply two numbers', () => {
    expect(BigInt(bigIntString1.multiply(bigIntString2))).toBe(
      BigInt(bigIntString1) * BigInt(bigIntString2)
    );
  });
  test('should correct multiply two numbers', () => {
    expect(BigInt(bigIntString3.multiply(bigIntString4))).toBe(
      BigInt(bigIntString3) * BigInt(bigIntString4)
    );
  });
  test('should return 0 if one of the numbers is 0', () => {
    expect(bigIntString3.multiply('0')).toBe('0');
  });
  test('should return 0 if two numbers are zero ', () => {
    expect(bigIntString3.multiply('0')).toBe('0');
  });
});
