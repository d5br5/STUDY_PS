/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
let uniquePaths = function (m, n) {
	let stop = Math.min(m - 1, n - 1);
	let count = 0;
	let result = 1;
	let denom = m - 1 + n - 1;
	let nom = Math.min(m - 1, n - 1);
	while (count++ < stop) {
		result *= denom-- / nom--;
	}
	return result;
};
