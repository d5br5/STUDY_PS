function solution(operations) {
    let que = [];
    for (let i = 0; i < operations.length; i++) {
        let [oper, num] = operations[i].split(" ");
        if (oper === 'I') {
            que.push(parseInt(num));
        } else if (num === '1') {
            que.sort((a, b) => a - b);
            que.pop();
        } else {
            que.sort((a, b) => a - b);
            que.shift();
        }
    }
    if (que.length === 0) return [0, 0];
    que.sort((a, b) => a - b);
    return [que[que.length - 1], que[0]];

}