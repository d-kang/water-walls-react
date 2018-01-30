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

const generateWater = () => {

};

const generateWalls = () => {

};

const completeMatrix = arr => {
  const { row, col } = getRowAndCol(arr);
  const matrix = matrixFromArray(arr);
  const { waterBlocksCount, waterWalls } = waterBlocks(arr);

  const withBlocks = generateBlocks(row, col, matrix, arr);
};

module.exports = {
  generateBlocks,
  generateWater,
  generateWalls,
  completeMatrix
}
