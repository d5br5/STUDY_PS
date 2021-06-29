function solution(n) {
  return getFibo(n)%1234567
}

function getFibo(n){
  if(n===0) return 0;
  if(n===1) return 1;
  let tmp1 =0;
  let tmp2 =1;
  let answer = 0;
  for(let i=2; i<=n ; i++){
    answer = tmp1%1234567 + tmp2%1234567;
    tmp1 = tmp2;
    tmp2 = answer;
  }
  return answer;
}