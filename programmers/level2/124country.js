function solution(n) {
  let start = n;
  let str = '';
  let cmd = {0: "4", 1: "1", 2: "2"};

  while (start > 0) {
    str = cmd[start % 3] + str;
    if (start % 3 === 0) start = start - 1;
    start = parseInt(start / 3);
  }
  return str;
}

function solution2(n) {
  let start = n;
  let str = '';
  while (start > 0) {
    str = ["4", "1", "2"][start % 3] + str;
    if (start % 3 === 0) start = start - 1;
    start = parseInt(start / 3);
  }
  return str;
}