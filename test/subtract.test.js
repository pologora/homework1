require('../app.js');

const bigIntString1 = '123456789012345678901234567890123456789025';
const bigIntString2 = '9876543210987654321098765432109876543210';
const bigIntString3 = '123456784023';
const bigIntString4 = '9876547215';
const bigIntString5 = '002469115890246911589024691158902469132615';
const bigIntString6 = '9876543210987654321098765432109876543210';

describe('Subtract two integers', () => {
  test('should correctly subtract two integers', () => {
    expect(BigInt(bigIntString1.minus(bigIntString2))).toBe(
      BigInt(bigIntString1) - BigInt(bigIntString2)
    );
  });
  test('should correctly subtract two integers', () => {
    expect(BigInt(bigIntString3.minus(bigIntString4))).toBe(
      BigInt(bigIntString3) - BigInt(bigIntString4)
    );
  });
  test('should correctly subtract two integers', () => {
    expect(BigInt(bigIntString5.minus(bigIntString6))).toBe(
      BigInt(bigIntString5) - BigInt(bigIntString6)
    );
  });
  test('should return 0 if subtract the same number', () => {
    expect(bigIntString5.minus(bigIntString5)).toBe('0');
  });
});
