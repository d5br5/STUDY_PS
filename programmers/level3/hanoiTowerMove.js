function solution(n) {
    let answer = [];
    hanoi(n, 1, 3, 2);
    function hanoi(n, a, b, c) {
        if (n === 1) {
            answer.push([a, b]);
            return;
        } else {
            hanoi(n - 1, a, c, b);
            hanoi(1, a, b, c);
            hanoi(n - 1, c, b, a);
        }
    }
    return answer;
}