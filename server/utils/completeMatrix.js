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

// [
//   [0, 1, 0, 0], 0
//   [0, 1, 0, 0], 1
//   [0, 1, 0, 1], 2
//   [0, 1, 0, 1], 3
//   [1, 1, 1, 1], 4
// ]
// [
//   [0, 1, 0, 0], 0
//   [0, 1, 0, 0], 1
//   [0, 1, 2, 1], 2
//   [0, 1, 2, 1], 3
//   [1, 1, 1, 1], 4
// ]
// arr =     [1, 5, 1, 3]
// waterArr =[0, 0, 2, 0]
// row = 5
// col = 4


const generateWater = (row, col, matrix, arr, waterArr) => {
  for (var i = 0; i < row; i++) {
    for (var k = 0; k < col; k++) {
      if (row - arr[k] - waterArr[k] - i <= 0 && matrix[i][k] !== 1) {
        matrix[i][k] = 2;
      }
    }
  }
  return matrix;
};

const generateWalls = () => {

};

const completeMatrix = arr => {
  const { row, col } = getRowAndCol(arr);
  const matrix = matrixFromArray(arr);
  const { waterBlocksArr, waterWallsArr } = waterBlocks(arr);

  const withBlocks = generateBlocks(row, col, matrix, arr);
  const withWater = generateWater(row, col, withBlocks, arr, waterBlocksArr);
  const withWalls = generateWater(row, col, withWater, waterWallsArr);

  return matrix;
};

module.exports = {
  generateBlocks,
  generateWater,
  generateWalls,
  completeMatrix
}
