const { matrixFromArray, getRowAndCol } = require('./createMatrix');
const { waterBlocks } = require('./waterBlocks');

const generateBlocks = (row, col, matrix, arr) => {
  for (var i = 0; i < row; i++) {
    for (var k = 0; k < col; k++) {
      if (row - i - arr[k] <= 0) {
        matrix[i][k] = 1;
      }
    }
  }
  return matrix;
};

const generateWater = (row, col, matrix, arr, waterArr) => {
  for (var i = 0; i < row; i++) {
    for (var k = 0; k < col; k++) {
      if ((row - arr[k] - waterArr[k] - i <= 0) && (matrix[i][k] !== 1)) {
        matrix[i][k] = 2;
      }
    }
  }
  return matrix;
};

const generateWalls = (row, col, matrix, waterWalls) => {
  let [left, right] = waterWalls;
  left = left - 1;
  right = right - 1;
  for (var i = 0; i < row; i++) {
    for (var k = 0; k < col; k++) {
      if ((k === left && matrix[i][k] === 1)|| (k === right && matrix[i][k] === 1)) {
        matrix[i][k] = 3;
      }
    }
  }
  return matrix;
};

const completeMatrix = arr => {
  const { row, col } = getRowAndCol(arr);
  const matrix = matrixFromArray(arr);
  const { waterBlocksArr, waterWallsArr } = waterBlocks(arr);
  const withBlocks = generateBlocks(row, col, matrix, arr);
  const withWater = generateWater(row, col, withBlocks, arr, waterBlocksArr);
  const withWalls = generateWalls(row, col, withWater, waterWallsArr);

  return withWalls;
};

module.exports = {
  generateBlocks,
  generateWater,
  generateWalls,
  completeMatrix
}
