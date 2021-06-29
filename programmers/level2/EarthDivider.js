function solution(land) {
  let answer = [];
  for(let i=0; i<land.length; i++){
    let arr = [0,0,0,0];
    if(i===0){
      arr = land[0];
      answer.push(arr);
      continue;
    }
    arr[0] = Math.max(answer[i-1][1], answer[i-1][2], answer[i-1][3]) + land[i][0];
    arr[1] = Math.max(answer[i-1][0], answer[i-1][2], answer[i-1][3]) + land[i][1];
    arr[2] = Math.max(answer[i-1][0], answer[i-1][1], answer[i-1][3]) + land[i][2];
    arr[3] = Math.max(answer[i-1][0], answer[i-1][1], answer[i-1][2]) + land[i][3];
    answer.push(arr);

  }
  return Math.max(answer[land.length-1][0],answer[land.length-1][1],answer[land.length-1][2],answer[land.length-1][3])
}