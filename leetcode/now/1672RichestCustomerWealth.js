/** 6735 6261
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
	let list = accounts.map((a) => a.reduce((a, b) => a + b, 0));
	let max = 0;
	for (let info of list) {
		if (max < info) max = info;
	}
	return max;
};

/** 0543 9131
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
	return Math.max(...accounts.map((a) => a.reduce((a, b) => a + b, 0)));
};
