function solution(s) {
  let answer = [];
  let cut = s.slice(2, s.length - 2).split("},{").map(a => a.split(",")).sort((a, b) => a.length - b.length).forEach(a => a.forEach(b => {
    if (!answer.includes(b)) answer.push(b)
  }))
  return answer.map(a => parseInt(a));
}