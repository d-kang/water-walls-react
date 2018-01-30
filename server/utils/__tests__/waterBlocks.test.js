const { waterBlocks } = require('../waterBlocks');

describe('waterBlocks', () => {
  test('it should return an objs with 2 arrays', () => {
    const result = waterBlocks([2, 0, 4, 1, 2, 3]);
    expect(typeof result).toBe('object');
    expect(Array.isArray(result.waterBlocksCount)).toBe(true);
    expect(Array.isArray(result.waterWalls)).toBe(true);
  });
  test('should return an object with correct waterblocks and waterwalls arrays', () => {
    const result = waterBlocks([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]);
    const expected = {
      waterBlocksCount: [0, 2, 0, 5, 1, 3, 2, 0, 1, 0],
      waterWalls: [3, 8, 11]
    }
    expect(result).toEqual(expected);
  });
})
