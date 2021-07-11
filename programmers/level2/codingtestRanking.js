// 다시 풀것. 최적화 못했음.

function solution(info, query) {
  let res = [];
  let indi = [];
  for (let i = 0; i < info.length; i++) {
    indi.push(info[i].split(" "));
  }
  for (let i = 0; i < query.length; i++) {
    let condi = query[i].split(" ").filter(a => a !== 'and');
    let filtered = indi.filter(a => parseInt(a[4]) >= parseInt(condi[4]));
    for (let j = 0; j < condi.length - 1; j++) {
      if (condi[j] === "-") continue;
      if (filtered.length === 0) break;
      filtered = filtered.filter(a => a[j] === condi[j]);
    }
    res.push(filtered.length);
  }
  return res;

}