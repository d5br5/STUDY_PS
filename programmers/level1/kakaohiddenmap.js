function solution(n, arr1, arr2) {

    let arr1con = [];
    let arr2con = [];

    for (let i = 0; i < n; i++) {
        arr1con.push(convert(arr1[i], n));
        arr2con.push(convert(arr2[i], n));
    }

    let res = [];

    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            if (arr1con[i][j] == 1 || arr2con[i][j] == 1) { str += '#'; } else { str += ' '; }
        }
        res.push(str);
    }

    return res;

    function convert(n, len) {
        var res = [];

        for (let i = 0; i < len; i++) {
            res.push(n % 2);
            n = parseInt(n / 2);
        }


        return res.reverse();
    }
}


var solution = (n, a, b) => a.map((a, i) => (a | b[i]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#'))