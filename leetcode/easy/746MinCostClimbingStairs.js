/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	let now = [0, 0];
	for (let i = 2; i <= cost.length; i++) {
		now[i] = Math.min(now[i - 1] + cost[i - 1], now[i - 2] + cost[i - 2]);
	}
	return now[cost.length];
};
