function solution(N, road, K) {
  var answer = 0;
  let arr = Array(N + 1).fill(Infinity);
  let adj = Array.from(Array(N + 1), () => Array());

  road.forEach(info => {
    let a = info[0];
    let b = info[1];
    let c = info[2];

    adj[a].push({to: b, weight: c});
    adj[b].push({to: a, weight: c});
  });

  let check = [{to: 1, weight: 0}];
  arr[1] = 0;
  while (check.length) {
    let edge = check.pop();
    adj[edge.to].forEach(next => {
      if (arr[next.to] > arr[edge.to] + next.weight) {
        arr[next.to] = arr[edge.to] + next.weight;
        check.push(next);
      }
    });
  }
  arr.forEach(e => (e <= K ? ++answer : null));
  return answer;
}

function solution(N, road, K) {

  let visited = Array(N + 1).fill(false);
  let dist = Array(N + 1).fill(Infinity);
  let adj = Array.from(Array(N + 1), () => Array());

  road.forEach(info => {
    let a = info[0];
    let b = info[1];
    let dist = info[2];
    adj[a].push({to: b, dist});
    adj[b].push({to: a, dist});
  })

  while (visited.includes(false)) {
    let filteredRoad = road.filter(a => ((visited[a[0]] && !visited[a[1]]) || (!visited[a[0]] && visited[a[1]])));
    let min = filteredRoad[0];

    for (let i = 0; i < filteredRoad.length; i++) {
      if (filteredRoad[i][2] < min[2]) min = filteredRoad[i];
    }

    if (visited[min[0]]) {
      visited[min[1]] = true;
      dist[min[1]] = dist[min[0]] + min[2];
    } else {
      visited[min[0]] = true;
      dist[min[0]] = dist[min[1]] + min[2];
    }
  }

  let count = -1;
  dist.forEach(e => (e <= K ? count++ : null));
  return count;
}

function solution(N, road, K) {

  let visited = Array(N + 1).fill(false);
  let dist = Array(N + 1).fill(Infinity);
  let adj = Array.from(Array(N + 1), () => Array());

  road.forEach(info => {
    let a = info[0];
    let b = info[1];
    let dist = info[2];
    adj[a].push({to: b, dist});
    adj[b].push({to: a, dist});
  })

  let check = [{to: 1, dist: 0}];
  dist[1] = 0;
  while (check.length) {
    let edge = check.pop();
    adj[edge.to].forEach(next => {
      if (dist[next.to] > dist[edge.to] + next.dist) {
        dist[next.to] = dist[edge.to] + next.dist;
        check.push(next);
      }
    });
  }

  let count = 0;
  dist.forEach(e => (e <= K ? count++ : null));
  return count;
}