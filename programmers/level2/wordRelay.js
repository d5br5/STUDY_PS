function solution(n, words) {
  let arr = [words[0]];
  let index = -1;
  for (let i = 1; i < words.length; i++) {
    if (arr.includes(words[i])) {
      index = i;
      break;
    } else if (words[i][0] !== words[i - 1][words[i - 1].length - 1]) {
      index = i;
      break;
    } else {
      arr.push(words[i]);
    }

  }
  if (index == -1) return [0, 0]

  return [index % n + 1, parseInt(index / n) + 1];
}