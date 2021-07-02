function solution(arr1, arr2) {
  var answer = [];
  for(var i=0;i<arr1.length;i++){
    var row = [];
    for(var j=0;j<arr2[0].length;j++){
      var rowNum = 0;
      for(var q=0;q<arr1[0].length;q++){
        rowNum += arr1[i][q] * arr2[q][j];
      }
      row.push(rowNum);
    }
    answer.push(row);
  }
  return answer;
}