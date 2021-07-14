function solution(board) {

  function count(arr, i, j) {
    let leng = 1;
    let isValid = true;
    while (isValid) {
      for (let k = 0; k < leng; k++) {
        for (let m = 0; m < leng; m++) {
          if (i + k >= board.length || m + j >= board[0].length) {
            return leng - 1;
          }
          if (arr[i + k][j + m] === 0) {
            return leng - 1;
          }
        }
      }
      leng++;
    }
  }

  let Max = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 0) continue;
      let counts = count(board, i, j);
      if (Max < counts) Max = counts;
    }
  }
  return Max * Max;
}

function solution2(board) {
  const x = board[0].length;
  const y = board.length;
  if (x <= 1 || y <= 1) return 1;
  let Max = 0;
  for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
      if (board[i][j] !== 0) {
        let min = Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;
        board[i][j] = min;
        if (min > Max) Max = min;
      }
    }
  }
  return Max * Max;
}

