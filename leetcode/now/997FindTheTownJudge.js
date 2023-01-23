/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
	let arr = new Array(n).fill(true);
	let count = new Array(n).fill(0);

	for (let [x, y] of trust) {
		arr[x - 1] = false;
		count[y - 1] += 1;
	}

	for (let i = 0; i < n; i++) if (arr[i] && count[i] == n - 1) return i + 1;

	return -1;
};
