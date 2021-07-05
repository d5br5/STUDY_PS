function solution(s) {
  let count = 0;
  let zero = 0;
  let one = 0;
  let start = s;

  while (start !== '1') {
    one = 0;
    for (let i = 0; i < start.length; i++) {
      if (start[i] === '0') zero++;
      else one++;
    }
    count++;
    start = binary(one);
  }
  return [count, zero];
}

function binary(num) {
  let arr = [];
  while (num > 0) {
    let res = num % 2;
    arr.push(res);
    num = parseInt(num / 2);
  }
  return arr.reverse().join("");
}