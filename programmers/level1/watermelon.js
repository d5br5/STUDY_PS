function waterMelon(n) {
    var result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
        //함수를 완성하세요

    return result.substring(0, n);
}


function solution(n) {
    var start = 0;
    var arr = ["수", "박"];
    var str = '';
    for (let i = 0; i < n; i++) {
        str += arr[start];
        if (start == 0) {
            start = 1;
        } else {
            start = 0;
        }
    }
    return str;
}