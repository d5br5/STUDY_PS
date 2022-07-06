/** 0627 0549
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
	let cases = [];
	for (let i = 1; i <= n; i++) {
		DFS(i, [i], i);
	}

	function DFS(now, arr, sum) {
		if (sum === n && arr.length >= 2) {
			cases.push(arr);
		}
		if (sum >= n) return;
		for (let i = now; i >= 1; i--) {
			if (sum + i <= n) DFS(i, [...arr, i], sum + i);
		}
	}

	let max = 0;
	for (let onecase of cases) {
		let product = onecase.reduce((prev, next) => prev * next, 1);
		max = Math.max(product, max);
	}
	return max;
};

/** 6314 7647
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
	if (n < 4) return n - 1;

	let share = parseInt(n / 3);
	let res = n % 3;

	if (res === 0) {
		return 3 ** share;
	} else if (res === 1) {
		return 3 ** (share - 1) * 4;
	} else {
		// res === 2
		return 3 ** share * 2;
	}
};
