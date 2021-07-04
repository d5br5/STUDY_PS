function solution(name) {
  let answer = 0;
  for (let i = 0; i < name.length; i++) {
    answer += Math.min((name.charCodeAt(i) - "A".charCodeAt(0)), ("[".charCodeAt(0) - name.charCodeAt(i)));
  }

  let arr = [];
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== 'A') arr.push(i);
  }

  let min = name.length * 2;

  for (let i = 0; i < arr.length - 1; i++) {
    let a = 2 * arr[i] + name.length - arr[i + 1];
    if (min > a) min = a;
  }
  if (min > arr[arr.length - 1]) min = arr[arr.length - 1];

  return answer + min;
}