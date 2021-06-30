function solution(s){
  if(s.length%2!==0) return false;
  if(s[0] === ')') return false;
  if(s[s.length-1]==='(') return false;

  let arr=[];
  for(let i=0; i<s.length; i++){
    if(s[i]==='(') {
      if(arr[arr.length-1]===')') return false;
      arr.push(s[i]);
    }else if(s[i]===')'){
      if(arr[arr.length-1]==='(') arr.pop();
      else return false;
    }
  }
  if(arr.length===0) return true;
  else return false;
}