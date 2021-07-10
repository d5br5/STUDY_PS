function solution(places) {
  return places.map(e => valid(e));
}

function valid(set) {
  const X = 'X';
  const P = 'P';
  const O = 'O';

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (set[i][j] === X) {
        continue;
      } else if (set[i][j] === O) {
        let count = 0;
        if (i > 0 && set[i - 1][j] === P) count++;
        if (j > 0 && set[i][j - 1] === P) count++;
        if (i < 4 && set[i + 1][j] === P) count++;
        if (j < 4 && set[i][j + 1] === P) count++;
        if (count > 1) return 0;
      } else if (set[i][j] === P) {
        if (i < 4 && j < 4) {
          if (set[i + 1][j] === P || set[i][j + 1] === P) return 0;
        } else if (i === 4) {
          if (j < 4 && set[i][j + 1] === P) return 0;
        } else if (j === 4) {
          if (i < 4 && set[i + 1][j] === P) return 0;
        }
      }
    }
  }
  return 1;
}