/** time exceed
 * pass 41/63
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	if (m == 1 || n == 1) {
		return 1;
	}
	return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);
};

/** 2795 6904
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	// m+n-2 C n-1
	let count = 1;
	for (let i = 1; i <= n - 1; i++) {
		count *= m + n - 1 - i;
		count /= i;
	}
	return count;
};

/** 8575 6059
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	// m+n-2 C n-1
	let count = 1;
	let iter = m > n ? n - 1 : m - 1;
	for (let i = 1; i <= iter; i++) {
		count *= m + n - 1 - i;
		count /= i;
	}
	return count;
};

/** 2795 4491
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
	let answer = Array.from({ length: m }, (v, i) => Array.from({ length: n }, (c, d) => 1));
	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			answer[i][j] = answer[i - 1][j] + answer[i][j - 1];
		}
	}
	return answer[m - 1][n - 1];
};
