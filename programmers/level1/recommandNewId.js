function solution(new_id) {
  let allowed = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","-","_",".","1","2","3","4","5","6","7","8","9","0"];
  let first  = new_id.toLowerCase();
  let second = "";
  second = first.replace(/[^\w-_.]/g,"");
  console.log(second);
  let third = "";
  for(let i=0; i<second.length; i++){
    if(0<i && second[i-1] ==="." && second[i]===".") continue;
    third+=second[i];
  }

  if(third.startsWith('.')) third = third.slice(1);
  if(third.endsWith('.')) third = third.slice(0,third.length-1);

  if(third === '') third = 'a';
  if(third.length>=16) third = third.slice(0,15);
  if(third.endsWith('.')) third = third.slice(0,third.length-1);

  if(third.length===1) third = third.repeat(3);
  if(third.length===2) third += third[1];
  return third;



}