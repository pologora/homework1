require('./app.js');

const bigIntString1 = '123456789012345678901234567890123456789025';
const bigIntString2 = '9876543210987654321098765432109876543210';
const bigIntString3 = '999';
const bigIntString4 = '100';

describe('Sum two integers', () => {
  test('should correctly add two integers', () => {
    expect(BigInt(bigIntString1.plus(bigIntString2))).toBe(
      BigInt(bigIntString1) + BigInt(bigIntString2)
    );
  });
  test('should correctly add two integers', () => {
    expect(BigInt(bigIntString3.plus(bigIntString4))).toBe(
      BigInt(bigIntString3) + BigInt(bigIntString4)
    );
  });
});

test('should correctly subtract two integers', () => {
  expect(BigInt(bigIntString1.minus(bigIntString2))).toBe(
    BigInt(bigIntString1) - BigInt(bigIntString2)
  );
});

test('should correctly divide two integers', () => {
  expect(BigInt(bigIntString1.divide(bigIntString2))).toBe(
    BigInt(bigIntString1) / BigInt(bigIntString2)
  );
});

test('should correctly multiply two integers', () => {
  expect(BigInt(bigIntString1.multiply(bigIntString2))).toBe(
    BigInt(bigIntString1) * BigInt(bigIntString2)
  );
});
