/** 8478 6575
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	let arr = Array.from({ length: cost.length + 1 }, () => 0);
	for (let i = 2; i < arr.length; i++) {
		arr[i] =
			arr[i - 1] + cost[i - 1] < arr[i - 2] + cost[i - 2]
				? arr[i - 1] + cost[i - 1]
				: arr[i - 2] + cost[i - 2];
	}
	return arr[arr.length - 1];
};

/** 3734 9188
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	let one = 0;
	let two = 0;
	let tmp;
	for (let i = 2; i <= cost.length; i++) {
		tmp = Math.min(one + cost[i - 1], two + cost[i - 2]);
		two = one;
		one = tmp;
	}
	return one;
};
