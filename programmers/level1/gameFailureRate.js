function solution(N, stages) {
  var answer = [];
  for(let i=1; i<=N; i++){
    answer.push(i);
  }
  answer.sort((a,b)=>failRate(b,stages)-failRate(a,stages));

  return answer;
}

function failRate(stage, total){
  let mother = 0;
  let son = 0;

  for(let i=0; i<total.length; i++){
    if(total[i]===stage) son++;
    if(total[i]>=stage) mother ++;
  }

  if(son===0) return 0;

  return son/mother;
}