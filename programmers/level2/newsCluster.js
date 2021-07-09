function solution(str1, str2) {
  let answer = 0;
  let arr1 = [];
  let arr2 = [];

  for (let i = 1; i < str1.length; i++) {
    if (isChar(str1[i - 1]) && isChar(str1[i])) {
      arr1.push((str1[i - 1] + str1[i]).toLowerCase());
    }
  }

  for (let i = 1; i < str2.length; i++) {
    if (isChar(str2[i - 1]) && isChar(str2[i])) {
      arr2.push((str2[i - 1] + str2[i]).toLowerCase());
    }
  }

  if (arr1.length === 0 && arr2.length === 0) {
    return 65536;
  } else if (arr1.length === 0 || arr2.length === 0) {
    return 0;
  }

  let coms = commonArr(arr1, arr2);
  let sums = [];
  for (let i = 0; i < arr1.length; i++) {
    sums.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    sums.push(arr2[i]);
  }

  answer = coms.length / sums.length;
  return Math.floor(answer * 65536);

}

function isChar(char) {
  return ('A'.charCodeAt(0) <= char.charCodeAt(0) && 'Z'.charCodeAt(0) >= char.charCodeAt(0)) || ('a'.charCodeAt(0) <= char.charCodeAt(0) && 'z'.charCodeAt(0) >= char.charCodeAt(0))
}

function commonArr(arr1, arr2) {
  let answer = [];
  let tmp1 = arr1;
  let tmp2 = arr2;
  for (let i = 0; i < tmp1.length; i++) {
    if (tmp2.includes(tmp1[i])) {
      answer.push(tmp1[i]);
      tmp2.splice(tmp2.indexOf(tmp1[i]), 1);
    }
  }
  return answer;
}