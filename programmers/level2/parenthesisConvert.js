function solution(p) {
  if(isCorrect(p)) return p;
  let left ="";
  let leftCount = 0;
  let right ="";
  let rightCount =0;

  for(let i=0; i<p.length; i++){
    if(p[i]==='(') leftCount++;
    else if(p[i]===')') rightCount++;

    if(leftCount===rightCount){
      left = p.slice(0,leftCount+rightCount);
      right = p.slice(leftCount+rightCount);
      break;
    }
  }
  if(isCorrect(left)) {
    return left+solution(right);
  }else{
    return '('+solution(right)+")"+cutting(left)
  }

}

function isCorrect(p){
  if(p[0]===')') return false;

  let lc =0;
  let rc =0;
  for(let i=0; i<p.length; i++){
    if(p[i]==='(') lc ++;
    if(p[i]===')') rc ++;
    if(rc>lc) return false;
  }
  return true;
}

function cutting(p){
  let str = '';
  for(let i=1; i<p.length-1; i++){
    if(p[i]==='(') str+=')';
    if(p[i]===')') str+='(';
  }
  return str;
}