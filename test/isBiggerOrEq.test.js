require('../app.js');
const bigIntString1 = '123456789012345678901234567890123456789025';
const bigIntString2 = '9876543210987654321098765432109876543210';
const bigIntString3 = '999';
const bigIntString4 = '100';
const bigIntString5 = '002469115890246911589024691158902469132615';
const bigIntString6 = '9876543210987654321098765432109876543210';

describe('Compare two integers', () => {
  test('should return true', () => {
    expect(bigIntString1.isBiggerOrEq(bigIntString2)).toBe(
      BigInt(bigIntString1) >= BigInt(bigIntString2)
    );
  });
  test('should return true', () => {
    expect(bigIntString3.isBiggerOrEq(bigIntString4)).toBe(
      BigInt(bigIntString3) >= BigInt(bigIntString4)
    );
  });
  test('should return false', () => {
    expect(bigIntString5.isBiggerOrEq(bigIntString6)).toBe(
      BigInt(bigIntString5) >= BigInt(bigIntString6)
    );
  });
});
