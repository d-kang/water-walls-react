const { generateBlocks } = require('../completeMatrix');
const { matrixFromArray } = require('../createMatrix');

describe('generateBlocks', () => {
  test('it should generate the correct blocks', () => {
    const row = 9;
    const col = 10;
    const matrix = matrixFromArray([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]);
    const arr = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
    const actual = generateBlocks(row, col, matrix, arr);
    const expected = [
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1, 0, 1, 1, 0, 0],
      [1, 0, 1, 0, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 0, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];
    expect(actual).toEqual(expected);
  });
});
