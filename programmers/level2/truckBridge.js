function solution(bridge_length, weight, truck_weights) {
  let doing = [];
  for (let i = 0; i < bridge_length; i++) {
    doing.push(0);
  }
  let not = truck_weights;
  let time = 0;
  while (not.length > 0) {
    doing.shift();
    if (sum(doing) + not[0] <= weight) {
      doing.push(not.shift());
    } else {
      doing.push(0);
    }
    time++;
  }
  time += bridge_length;
  return time;

}

function sum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
  }
  return count;
}
