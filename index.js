// Matrix Rotate
// Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:

// 1	2
// 3	4
// You should return [[3, 1], [4, 2]], which looks like this:

// 3	1
// 4	2

function rotate(matrix) {
  console.log(matrix);
  // create a new empty matrix
  const newMatrix = [];
  // loop over column indicies
  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let l = matrix.length - 1; l >= 0; l--) {
      row.push(matrix[l][i]);
    }
    newMatrix.push(row);
  }
  // Inside that loop, walk through rows from last to first
  // push values into a new row
  // push that row into the result
  console.log(newMatrix);
  return newMatrix;
}
