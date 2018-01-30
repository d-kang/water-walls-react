const { matrixFromArray } = require('../createMatrix');

describe('matrixFromArray', () => {
  test('it returns the correct NxM matrix', () => {
    const actual = matrixFromArray([1, 5, 2, 3]);
    const expected = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    expect(actual).toEqual(expected);
  });
});
