function solution(progresses, speeds) {
  let answer =[];
  let count =0;
  while(progresses.length>0){
    while(progresses[0]<100){
      for(let i=0; i<progresses.length; i++){
        progresses[i] += speeds[i];
      }
    }
    for(let i=0; i<progresses.length; i++){
      if(progresses[i]>=100) count++;
      else break;
    }
    for(let i=0; i<count; i++){
      progresses.shift();
      speeds.shift();
    }
    answer.push(count);
    count=0;
  }
  return answer;
}