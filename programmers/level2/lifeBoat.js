function solution(people, limit) {
  let origin = [];
  let count = 0;
  let point = limit;
  for (let i = 0; i < people.length; i++) {
    origin.push(people[i]);
  }
  origin.sort((a, b) => b - a);
  while (origin.length) {
    if (origin[0] <= limit / 2) return count + Math.ceil(origin.length / 2)
    point -= origin.shift();
    if (origin[origin.length - 1] <= point) origin.pop();
    count++;
    point = limit;
  }
  return count;
}


function solution(people, limit) {
  people.sort((a, b) => b - a);
  let count = 0;
  let first = 0;
  let second = people.length - 1;

  while (first <= second) {
    if (people[first] <= limit / 2) return count + Math.ceil((second - first + 1) / 2);
    if (people[first] + people[second] <= limit) second--;
    first++;
    count++;
  }
  return count;
}