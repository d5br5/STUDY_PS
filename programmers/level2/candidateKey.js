// 다시 풀기

function solution(relation) {
  let min = relation[0].length;
  let sets = [];
  for (let i = 0; i < min; i++) {
    sets.push(i);
  }
  let subset = subsets(sets);
  let ans = [];
  for (let i = 0; i < subset.length; i++) {
    if (isValid(relation, subset[i])) ans.push(subset[i]);
  }
  ans.sort((a, b) => b.length - a.length);
  for (let i = 0; i < ans.length; i++) {
    if (isAnswer(ans[i])) return ans[i].length;
  }

  function isAnswer(arr) {
    for (let i = 0; i < arr.length; i++) {
      let point = [...arr.slice(0, i), ...arr.slice(i + 1, arr.length)];
      if (isValid(relation, point)) return false;
    }
    return true;
  }
  return 1;
}

function subsets(arr) {
  let ans = [[], [arr[0]]];

  for (let i = 1; i < arr.length; i++) {
    let tmp = [];
    for (let j = 0; j < ans.length; j++) {
      tmp.push([...ans[j]])
    }
    for (let j = 0; j < ans.length; j++) {
      ans[j].push(arr[i]);
    }
    ans = [...ans, ...tmp]
  }
  return ans
}

function isValid(rel, arr) {
  let res = [];
  for (let i = 0; i < rel.length; i++) {
    let point = "";
    for (let j = 0; j < arr.length; j++) {
      point += rel[i][arr[j]] + ",";
    }
    if (res.includes(point)) {
      return false;
    } else {
      res.push(point);
    }
  }
  return true;
}

function solutionOther(relation) {
  const cols = relation[0].length
  const rows = relation.length
  const sets = 1 << cols
  const sk = new Set()

  for (let i=1; i<sets; i++) {
    const tmp = new Set()
    for (let row=0; row<rows; row++) {
      let key = ''
      for (let col=0; col<cols; col++) {
        if (i & (1 << col)) key = String(key) + String(relation[row][col])
      }
      tmp.add(key)
    }
    if (tmp.size === rows) sk.add(i)
  }

  for (let i of sk) {
    for (let j of sk) {
      if (i >= j) continue
      if ((i & j) === i) sk.delete(j)
    }
  }

  console.log(Array.from(sk).map(e => e.toString(2)))

  return sk.size
}