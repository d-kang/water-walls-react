const { generateWalls, generateBlocks, generateWater } = require('../completeMatrix');
const { matrixFromArray } = require('../createMatrix');

describe('generateWater', () => {
  test('it should generate the correct water blocks', () => {
    const row = 9;
    const col = 10;
    const arr = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
    const matrix = matrixFromArray(arr);

    const withBlocks = generateBlocks(row, col, matrix, arr);
    const withWater = generateWater(row, col, withBlocks, arr, [0, 2, 0, 5, 1, 3, 2, 0, 1, 0]);
    const actual = generateWalls(row, col, withWater, [3, 8]);
    const expected = [
      [0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
      [0, 0, 3, 2, 2, 2, 2, 3, 0, 0],
      [0, 0, 3, 2, 1, 2, 2, 3, 0, 0],
      [1, 2, 3, 2, 1, 2, 1, 3, 0, 0],
      [1, 2, 3, 2, 1, 1, 1, 3, 0, 0],
      [1, 1, 3, 2, 1, 1, 1, 3, 0, 0],
      [1, 1, 3, 1, 1, 1, 1, 3, 2, 1],
      [1, 1, 3, 1, 1, 1, 1, 3, 1, 1],
    ];

    expect(actual).toEqual(expected);
  });
});
