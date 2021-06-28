function solution(n) {
  let origin =tentotwo(n).split("").reverse();
  let index =0;
  let count =0;
  if(origin[0]==="1") count ++;

  for(let i=1; i<origin.length; i++){
    if(origin[i]==="1") count++;
    index = i;
    if(origin[i-1]==="1" && origin[i]==="0") {
      index = i-1;
      break;
    }
  }

  origin[index+1] = 1;
  origin[index] = 0;
  count--;
  for(let i=0; i<index; i++){
    origin[i]=0;
  }
  for(let i=0; i<index; i++){
    if(count<=0) break;
    origin[i]=1;
    count--;
  }
  let str = origin.reverse().join("");
  return twototen(str);
}

function twototen(n){
  let arr = n.split("").reverse();
  let result = 0;
  for(let i=0; i<arr.length; i++){
    result += parseInt(arr[i]) * 2 ** i;
  }
  return result;
}

function tentotwo(n){
  let str = '';
  while(n>0){
    let result = n%2;
    str += result;
    n= (n-result)/2;
  }
  return str.split("").reverse().join("");
}