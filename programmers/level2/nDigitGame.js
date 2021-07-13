function solution(n, t, m, p) {
  let con = '0';
  let answer = '';
  for (let i = 1; i < t * m; i++) {
    convert(i, n).forEach(a => con += a);
  }
  for (let i = 0; i < t; i++) {
    answer += con[m * i + p - 1];
  }
  return answer;
}

function convert(num, digit) {
  let arr = [];
  while (num > 0) {
    let mod = num % digit;
    arr.push(mod.toString(digit).toUpperCase());
    num = parseInt(num / digit);
  }
  return arr.reverse();
}

function solution2(n, t, m, p) {
  let con = '0';
  let answer = '';
  for (let i = 1; i < t * m; i++) {
    con += i.toString(n).toUpperCase();
  }
  for (let i = 0; i < t; i++) {
    answer += con[m * i + p - 1];
  }
  return answer;
}