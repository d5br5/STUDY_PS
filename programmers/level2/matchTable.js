function solution(n,a,b)
{
  let count = Math.log2(n);
  let gap = n/2;
  let point = n/2;

  while(count>0){
    if(a<=point&&b<=point){
      count--;
      gap = gap/2;
      point -= gap;
    }else if(a>point && b>point){
      count--;
      gap = gap/2;
      point += gap;
    }else{
      break;
    }
  }
  return count;
}

function solution(n,a,b)
{
  let answer = 0;
  while(a !== b) {
    a = Math.ceil(a/2);
    b = Math.ceil(b/2);
    answer++;
  }

  return answer;
}