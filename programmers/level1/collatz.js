function solution(num) {

    function collatz(n, count) {
        if (count > 500) return -1;
        if (n == 1) return count;
        if (n % 2 == 0) {
            return collatz(n / 2, count + 1);
        } else {
            return collatz(n * 3 + 1, count + 1);
        }
    }

    return collatz(num, 0);

}