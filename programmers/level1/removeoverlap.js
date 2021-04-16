function solution(arr) {
    var start = -1;
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != start) {
            res.push(arr[i]);
            start = arr[i];
        }
    }
    return res;
}



function solution2(arr) {
    return arr.filter((val, index) => val != arr[index + 1]);
}