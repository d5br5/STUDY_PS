function solution(n) {
  function dist(num) {
    if (num === 1) return 1;
    if (num % 2 === 0) return dist(num / 2);
    else return dist(num - 1) + 1;
  }
  return dist(n);
}