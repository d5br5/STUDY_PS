/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
	let arr = [0, 1, 1, 2];
	if (n <= 3) return arr[n];
	for (let i = 4; i <= n; i++) {
		arr[0] = arr[1];
		arr[1] = arr[2];
		arr[2] = arr[3];
		arr[3] = arr[0] + arr[1] + arr[2];
	}
	return arr[3];
};
