const { removeZeroAtStart } = require('../helpers/helpers');

describe('Remove zero at the begining of string numbers', () => {
  test('should remove zero at the begining', () => {
    expect(removeZeroAtStart('0012')).toBe('12');
  });
  test('should remove zero at the begining', () => {
    expect(removeZeroAtStart('000012454545')).toBe('12454545');
  });
});
