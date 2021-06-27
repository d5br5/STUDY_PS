function solution2(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
  var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
  var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
  var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
  var max = Math.max(a1c,a2c,a3c);

  if (a1c === max) {answer.push(1)};
  if (a2c === max) {answer.push(2)};
  if (a3c === max) {answer.push(3)};


  return answer;
}

function solution1(answers) {

  let count1=0;
  let count2=0;
  let count3=0;

  for(let i=0; i<answers.length ; i ++){
    if(answers[i]===1+i%5) count1++;
  }

  for(let i=0; i<answers.length ; i ++){
    if(i%2===0){
      if(answers[i]===2) count2++;
    }else if(i%8===1){
      if(answers[i]===1) count2++;
    }else if(i%8===3){
      if(answers[i]===3) count2++;
    }else if(i%8===5){
      if(answers[i]===4) count2++;
    }else if(i%8===7){
      if(answers[i]===5) count2++;
    }
  }

  for(let i=0; i<answers.length ; i ++){
    if(i%10<2){
      if(answers[i]===3) count3++;
    }else if(i%10<4){
      if(answers[i]===1) count3++;
    }else if(i%10<6){
      if(answers[i]===2) count3++;
    }else if(i%10<8){
      if(answers[i]===4) count3++;
    }else if(i%10<10){
      if(answers[i]===5) count3++;
    }
  }

  const max = Math.max(count1, count2, count3);

  let answer = [];
  if(max === count1) answer.push(1);
  if(max === count2) answer.push(2);
  if(max === count3) answer.push(3);

  return answer;
}