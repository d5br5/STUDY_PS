function solution(dirs) {
  let x = 0;
  let y = 0;
  let already = [];
  let count = 0;

  for (let i = 0; i < dirs.length; i++) {
    let before = [x, y];
    if (dirs[i] === "U") {
      if (y < 5) y++;
      else continue;
    } else if (dirs[i] === "D") {
      if (y > -5) y--;
      else continue;
    } else if (dirs[i] === "R") {
      if (x < 5) x++;
      else continue;
    } else {
      if (x > -5) x--;
      else continue;
    }
    let after = [x, y];
    let path = (before[0] + after[0]) / 2 + "," + (before[1] + after[1]) / 2;
    if (!already.includes(path)) {
      count++;
      already.push(path);
    }
  }
  return count;
}