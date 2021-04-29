function sumMatrix(A, B) {
    /*var answer = Array();
  var rowMax = A.length > B.length ? A.length : B.length;
  var colMax = A[0].length > B[0].length ? A[0].length : B[0].length;
    for(var i=0; i < rowMax; i++)
  {
    answer[i] = new Array();
    for(var j=0; j < colMax; j++)
    {
      console.log(isNaN(A[i][j])?0:A[i][j]);
      console.log(isNaN(B[i][j])?0:B[i][j]);
            answer[i][j] = parseInt(isNaN(A[i][j])?0:A[i][j]) + parseInt(isNaN(B[i][j])?0:B[i][j]);
    }
  }*/

    return A.map((a, i) => a.map((b, j) => b + B[i][j]));
}


function solution(arr1, arr2) {
    let answer = [];
    for (var i = 0; i < arr1.length; i++) {
        answer.push([]);
        for (var k = 0; k < arr1[i].length; k++) {
            answer[i].push(arr1[i][k] + arr2[i][k]);
        }
    }
    return answer;
}