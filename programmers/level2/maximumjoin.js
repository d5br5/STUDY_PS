function solution(numbers) {
  let arr = numbers.sort((a,b)=>{
    if(a===b) return -1;
    let alength = a.toString().length;
    let blength = b.toString().length;
    let len = Math.min(alength, blength);
    for(let i=1; i<=len; i++){
      if(parseInt(a/(10**(alength-i))) > parseInt(b/(10**(blength-i)))) return -1;
      if(parseInt(a/(10**(alength-i))) < parseInt(b/(10**(blength-i)))) return 1;
    }
    let afirst = parseInt(a/(10**(alength-1)));
    let bfirst = parseInt(b/(10**(blength-1)));
    if(a>b){
      let am = a%(10**(alength-len));
      if(parseInt(am.toString()+b.toString()) >= a) return -1;
      else return 1;
    }else{
      let bm = b%(10**(blength-len));
      if(parseInt(bm.toString()+a.toString()) >= b) return 1;
      else return -1;
    }
  })

  let result = arr.join("");
  if(parseInt(result)===0) return "0";
  else return result;

}



function solution2(numbers) {
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}