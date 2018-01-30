const { createArray } = require('../createMatrix');


describe('createArray', () => {
  test('it should return an array', () => {
    expect(Array.isArray(createArray(5))).toBe(true);
  });

  test('it should create an array of length 5', () => {
    expect(createArray(5)).toHaveLength(5);
  });

  test('it should contain all 0"s', () => {
    const expected = [0];
    expect(createArray(5)).toEqual(
      expect.arrayContaining(expected)
    );
  });
})
