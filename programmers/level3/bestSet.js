function solution(n, s) {
    if (n > s) return [-1];
    let base = parseInt(s / n);
    let otherCount = s - base * n;
    let baseCount = n - otherCount;

    let answer = [];
    for (let i = 0; i < baseCount; i++) {
        answer.push(base)
    }
    for (let i = 0; i < otherCount; i++) {
        answer.push(base + 1)
    }
    return answer
}