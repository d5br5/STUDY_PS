function solution(n) {

  let py = [];
  for(let i=0; i<n; i++){
    let arr = [];
    for(let k=0; k<=i ; k++){
      arr.push(0);
    }
    py.push(arr);
  }
  let start = n;
  let num = 0;
  let y=-1;
  let x=0;
  let count = 0;
  let tmp = [0,0];
  while(start>0){
    count = 0;
    for(let i=y+1; count<start; i++){
      py[i][x] = ++num;
      y=i;
      count ++;
    }
    start--;

    count = 0;
    for(let i=x+1; count<start; i++){
      py[y][i] = ++num;
      x=i;
      count++;
    }
    start--;

    count = 0;
    for(let i=1; count<start; i++ ){
      py[y-i][x-i] = ++num;
      count++;
      tmp[0] = x-i;
      tmp[1] = y-i;
    }
    x= tmp[0];
    y= tmp[1];
    start--;
  }

  let answer = [];
  for(let i=0; i<py.length; i++){
    answer = [...answer, ...py[i]];
  }
  return answer
}