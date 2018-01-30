const { getRowAndCol } = require('../createMatrix');

describe('getRowAndCol', () => {
  test('it gets row and col', () => {
    const expected = {
      row: 5,
      col: 5
    }
    expect(getRowAndCol([5, 4, 3, 2, 1])).toEqual(expected);
  });
  test('it gets row and col', () => {
    const expected = {
      row: 10,
      col: 7
    }
    expect(getRowAndCol([10, 6, 5, 4, 3, 2, 1])).toEqual(expected);
  });
});
