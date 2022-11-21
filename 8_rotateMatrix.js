const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let l = 0;
let r = matrix.length - 1;

while (l < r) {
  for (let i = 0; i < r - l; i++) {
    let t = l;
    let b = r;
    let topLeft = matrix[t][l + i];
    matrix[t][l + i] = matrix[b - i][l];
    matrix[b - i][l] = matrix[b][r - i];
    matrix[b][r - i] = matrix[t + i][r];
    matrix[t + i][r] = topLeft;
  }
  r--;
  l++;
}
matrix;
