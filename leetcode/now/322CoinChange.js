/** 1765 7725
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	coins.sort((a, b) => b - a);
	if (amount === 0) return 0;
	let dp = Array.from({ length: amount + 1 }, () => 0);
	for (let i = 0; i <= amount; i++) {
		if (i !== 0 && dp[i] == 0) continue;
		for (let coin of coins) {
			if (dp[i + coin] === 0) {
				dp[i + coin] = dp[i] + 1;
			} else {
				if (dp[i + coin] > dp[i] + 1) dp[i + coin] = dp[i] + 1;
			}
		}
	}
	return dp[amount] === 0 ? -1 : dp[amount];
};
