function solution(n, money) {
    let count = 0;

    function makeMoney(goal, currs) {
        let first = currs[0];
        let canCount = parseInt(goal / first);
        if (goal === 0) { count++; return; }
        if (currs.length === 0) return;
        if (canCount === 0) makeMoney(goal, currs.slice(1));
        for (let i = 0; i <= canCount; i++) {
            makeMoney(goal - first * i, currs.slice(1));
        }
    }
    makeMoney(n, money);

    return count % 1000000007;
}

function solution2(n, money) {
    let dp = [1];
    for (let i = 0; i < n; ++i) dp.push(0);

    money.map(unit => {
        dp[unit] += 1;
        for (let i = unit + 1; i <= n; ++i) {
            dp[i] += dp[i - unit];
        }
    });

    return dp[n];
}