function solution(a, b) {
    var sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i] * b[i];
    }
    return sum;
}

function solution2(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}