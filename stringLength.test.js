const stringLength = require('./stringLength');

describe('stringLength', () => {
  it('returns the correct length for a valid string', () => {
    expect(stringLength('hello')).toBe(5);
  });

  it('throws an error for an empty string', () => {
    expect(() => {
      stringLength('');
    }).toThrow('String must be at least 1 character long.');
  });

  it('throws an error for a string longer than 10 characters', () => {
    expect(() => {
      stringLength('ThisIsALongString');
    }).toThrow('String cannot be longer than 10 characters.');
  });
});
