function solution(clothes) {
  let set = {};
  let count = 1;
  for (let i = 0; i < clothes.length; i++) {
    if (set[clothes[i][1]]) set[clothes[i][1]] += 1;
    else set[clothes[i][1]] = 1;
  }
  let arr = Object.values(set);
  for (let i = 0; i < arr.length; i++) {
    count *= arr[i] + 1;
  }
  return count - 1;
}