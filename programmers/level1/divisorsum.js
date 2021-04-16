function solution2(n, a = 0, b = 0) {
    return n <= a / 2 ? b : solution(n, a + 1, b += n % a ? 0 : a);
}

function solution(n) {
    var bp = parseInt(Math.sqrt(n));
    var sum = 0;
    for (let i = 1; i < bp + 1; i++) {
        if (n % i == 0) {
            sum += i;
            if (n / i != i) {
                sum += n / i;
            }
        }
    }

    return sum;
}