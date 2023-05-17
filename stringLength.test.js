const stringLength = require('./stringLength');

describe('stringLength', () => {
  it('should return the correct length of a string', () => {
    const str1 = "Hello, world!";
    const str2 = "Lorem ipsum dolor sit amet";
    const str3 = "";
    
    expect(stringLength(str1)).toBe(13);
    expect(stringLength(str2)).toBe(26);
    expect(stringLength(str3)).toBe(0);
  });
});
