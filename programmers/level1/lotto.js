function solution(lottos, win_nums) {
  let withoutZero = lottos.filter(a=>a!==0)
  let repeated = withoutZero.filter(a=>win_nums.includes(a));

  let zerocount = win_nums.length - withoutZero.length;

  let min = repeated.length;
  let max = min + zerocount;

  return [rate(max), rate(min)];



}

function rate(num){
  if(num===6) return 1;
  if(num===5) return 2;
  if(num===4) return 3;
  if(num===3) return 4;
  if(num===2) return 5;
  else return 6;

}