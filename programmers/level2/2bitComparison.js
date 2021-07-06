function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(f(numbers[i]));
  }
  return answer;
}

function f(num) {
  if (num % 2 === 0) return num + 1;
  let arr = bin(num).split("").reverse();

  let point = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '0') break;
    point = i;
  }
  return num + 2 ** point;
}

function bin(num) {
  let arr = [];
  while (num > 0) {
    arr.push(num % 2);
    num = parseInt(num / 2);
  }
  return arr.reverse().join("");
}