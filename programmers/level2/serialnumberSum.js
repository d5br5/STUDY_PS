function solution(n) {
  let count = 1;
  let point = Math.sqrt((n + 1) * 2);
  for (let i = 2; i < point; i++) {
    if (can(n, i)) count++;
  }
  return count;
}

function can(num, mod) {
  if (mod % 2 === 0) {
    if (num * 2 % mod === 0 && num % mod !== 0) return true;
    else return false;
  } else {
    if (num % mod === 0) return true;
    else return false;
  }
}

function expressions(num) {
  let answer = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1)
      answer++
  }
  return answer;
}