function solution(rows, columns, queries) {
  let origin = [];
  let answer = [];
  let min = 0;
  for (let i = 0; i < rows; i++) {
    let arr = [];
    for (let j = 1; j <= columns; j++) {
      arr.push(columns * i + j);
    }
    origin.push(arr);
  }
  for (let i = 0; i < queries.length; i++) {
    [origin, min] = rotate(origin, queries[i]);
    answer.push(min);
  }

  return answer;
}

function rotate(mat, query) {
  let start = [query[0] - 1, query[1] - 1];
  let end = [query[2] - 1, query[3] - 1];
  let min = mat[start[0]][start[1]];
  let tmp1 = mat[start[0]][start[1]];
  let tmp2 = 0;

  for (let i = start[1] + 1; i <= end[1]; i++) {
    tmp2 = mat[start[0]][i];
    if (tmp2 < min) min = tmp2;
    mat[start[0]][i] = tmp1;
    tmp1 = tmp2;
  }
  for (let i = start[0] + 1; i <= end[0]; i++) {
    tmp2 = mat[i][end[1]];
    if (tmp2 < min) min = tmp2;
    mat[i][end[1]] = tmp1;
    tmp1 = tmp2;
  }
  for (let i = end[1] - 1; i >= start[1]; i--) {
    tmp2 = mat[end[0]][i];
    if (tmp2 < min) min = tmp2;
    mat[end[0]][i] = tmp1;
    tmp1 = tmp2;
  }
  for (let i = end[0] - 1; i >= start[0]; i--) {
    tmp2 = mat[i][start[1]];
    if (tmp2 < min) min = tmp2;
    mat[i][start[1]] = tmp1;
    tmp1 = tmp2;
  }

  return [mat, min];
}