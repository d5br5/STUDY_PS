function solution(s) {
  if(s.length%2!==0) return 0;
  let count = 0;
  for(let i=0; i<s.length; i++){
    if(isRight(`${s.slice(i,s.length)}${s.slice(0,i)}`)) count++;
  }
  return count;
}

function isRight(s){
  let left = ["(","{","["];
  let right = [")","}","]"];
  if(s.length%2!==0) return false;
  if(right.includes(s[0])) return false;
  if(left.includes(s[s.length-1])) return false;

  let arr=[];
  for(let i=0; i<s.length; i++){
    if(left.includes(s[i])){
      arr.push(s[i]);
    }else if(right.includes(s[i])){
      if(s[i]===')'){
        if(arr[arr.length-1]==='(') arr.pop();
        else return false;
      }else if(s[i]==='}'){
        if(arr[arr.length-1]==='{') arr.pop();
        else return false;
      }else{
        if(arr[arr.length-1]==='[') arr.pop();
        else return false;
      }
    }
  }

  if(arr.length===0) return true;
  else return false;

}