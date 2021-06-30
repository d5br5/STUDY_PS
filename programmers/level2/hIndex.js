function solution(citations) {
  let max =0;
  for(let i=0; i<=citations.length; i++){
    let count =0;
    for(let j=0; j<citations.length; j++){
      if(citations[j]>=i) count++;
    }
    if(count>=i) max = i;
  }
  return max;
}