function solution(n, k) {
    let res = [];
    let first = [];
    let total = 1;
    for (let i = 1; i <= n; i++) {
        total *= i;
        first.push(i)
    }
    let nextK = k - 1;
    let index;

    for (let i = 0; i < n - 1; i++) {
        total /= n - i;
        index = parseInt(nextK / total);
        nextK = nextK % total;
        res.push(first[index]);
        first.splice(index, 1);
    }

    res.push(first[0]);
    return res

}