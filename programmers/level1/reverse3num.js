const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}

function solution(n) {
    var arr = [];
    while (n > 0) {
        arr.push(n % 3);
        n = parseInt(n / 3);
    }
    var res = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        res += 3 ** (arr.length - 1 - i) * arr[i]
    }
    return res;

}