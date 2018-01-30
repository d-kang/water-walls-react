const { createMatrix } = require('../createMatrix');


describe('createMatrix', () => {
  test('it should return an array', () => {
    expect(Array.isArray(createMatrix(5, 4))).toBe(true);
  });

  test('it should create a matrix with 5 rows 4 columns', () => {
    const expected = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    expect(createMatrix(5, 4)).toHaveLength(5);
    expect(createMatrix(5, 4)[0]).toHaveLength(4);
    expect(createMatrix(5, 4)).toEqual(expected);
  });

  test('it should contain sub arrays', () => {
    const expected = [];
    expect(createMatrix(5, 4)).toEqual(
      expect.arrayContaining(expected)
    );
  });
})
