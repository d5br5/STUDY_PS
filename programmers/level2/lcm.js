function solution(arr) {
  let answer = 1;
  for(let i=0; i<arr.length; i++){
    answer = lcm(answer, arr[i]);
  }
  return answer

}

function lcm(a,b){
  if(a===b) return a;
  if(a===1) return b;
  if(b===1) return a;
  let max=0;
  if(a<b){
    for(let i=1; i<=a; i++){
      if(a%i===0 && b%i===0) max = i;
    }
  }else{
    for(let i=1; i<=b; i++){
      if(a%i===0 && b%i===0) max = i;
    }
  }
  return a*b/max;
}

function nlcm(num) {
  return num.reduce((a,b) => a*b / gcd(a,b))
}

function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}