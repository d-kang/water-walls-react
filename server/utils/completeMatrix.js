const { matrixFromArray, getRowAndCol } = require('./createMatrix');
const { waterBlocks } = require('./waterBlocks');

const generateBlocks = (row, col, matrix, arr) => {

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
