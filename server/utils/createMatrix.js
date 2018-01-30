const createArray = col => {
  return Array(col).fill(0);
};

const createMatrix = (row, col) => {
  const matrix = [];
  for (var i = 0; i < row; i++) {
    matrix.push(createArray(col));
  }
  return matrix;
};

const getRowAndCol = arr => {
  const col = arr.length;
  const row = Math.max(...arr);
  return {
    row,
    col
  }
};

const matrixFromArray = arr => {
  const { row, col } = getRowAndCol(arr);
  const matrix = createMatrix(row, col);
  return matrix;
}

module.exports = {
  createArray,
  createMatrix,
  getRowAndCol,
  matrixFromArray
};
