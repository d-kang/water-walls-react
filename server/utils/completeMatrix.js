const { matrixFromArray, getRowAndCol } = require('./createMatrix');
const { waterBlocks } = require('./waterBlocks');



const generateBlocks = (row, col, matrix, arr) => {
  // arr = [ 1, 5, 3, 2 ];
  // row = 5 - i
  //
  // [
  //   [0, 1, 0, 0], 0
  //   [0, 0, 0, 0], 1
  //   [0, 0, 0, 0], 2
  //   [0, 0, 0, 0], 3
  //   [0, 0, 0, 0]  4
  // ];
  //
  // [
  //   [0, 1, 0, 0], 0
  //   [0, 1, 0, 0], 1
  //   [0, 1, 3, 0], 2
  //   [0, 1, 3, 1], 3
  //   [1, 1, 3, 1]  4
  // ];
  // console.log('row', row)
  // console.log('col', col)
  // console.log('matrix', matrix)
  // console.log('arr', arr)

  for (var i = 0; i < row; i++) {
    for (var k = 0; k < col; k++) {
      // console.log('i', i)
      // console.log('k', k)
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
