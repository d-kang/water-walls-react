const { completeMatrix} = require('../completeMatrix');

describe('completeMatrix', () => {
  test('it should generate correct output for completeMatrix', () => {
    const arr = [5, 3, 7, 2, 6, 4, 5, 9, 1, 2];
    const actual = completeMatrix(arr);
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
