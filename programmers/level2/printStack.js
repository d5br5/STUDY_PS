function solution(priorities, location) {
  let arr = [];
  for (let i = 0; i < priorities.length; i++) {
    arr.push(i);
  }
  let arr2 = priorities;
  let arr3 = [];

  while (arr.length > 0) {
    if (isMax(arr2, arr2[0])) {
      arr3.push(arr.shift());
      arr2.shift();
    } else {
      arr.push(arr.shift());
      arr2.push(arr2.shift());
    }
  }
  return arr3.indexOf(location) + 1
}

function isMax(arr, num) {
  let max = num;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  if (max === num) return true;
  else return false;
}