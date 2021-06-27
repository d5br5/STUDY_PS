function solution(nums) {
  let count=0;
  for(let i=0; i<nums.length-2; i++){
    for(let j=i+1; j<nums.length-1; j++){
      for(let k=j+1; k<nums.length; k++){
        if(isPrime(nums[i]+nums[j]+nums[k])) count++;
      }
    }
  }

  return count;
}

function isPrime(number){
  if(number===2) return true;
  if(number===3) return true;
  if(number===5) return true;
  if(number===7) return true;
  if(number%2===0) return false;

  let mark = Math.floor(Math.sqrt(number));
  for(let i=3; i<=mark; i=i+2){
    if(number%i === 0 ) return false;
  }
  return true;
}