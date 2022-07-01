/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @runtime 80ms 29.75%
 * @memory 38.6MB 87.73%
 */
var rotate = function (matrix) {
	let n = matrix.length;
	let iterNum = Math.floor(n / 2);
	let tmp = 0;
	for (let i = 0; i < iterNum; i++) {
		for (let j = 0; j < n - 2 * i - 1; j++) {
			tmp = matrix[n - 1 - i - j][0 + i];
			matrix[n - 1 - i - j][0 + i] = matrix[n - 1 - i][n - 1 - i - j];
			matrix[n - 1 - i][n - 1 - i - j] = matrix[i + j][n - 1 - i];
			matrix[i + j][n - 1 - i] = matrix[i + 0][i + j];
			matrix[i + 0][i + j] = tmp;
		}
	}
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @runtime 68ms 91.64%
 * @memory 38.7MB 87.73%
 */
var rotate = function (matrix) {
	let n = matrix.length;
	let tmp = 0;
	for (let i = 0; i < Math.floor(n / 2); i++) {
		for (let j = 0; j < n - 2 * i - 1; j++) {
			tmp = matrix[n - 1 - i - j][0 + i];
			matrix[n - 1 - i - j][0 + i] = matrix[n - 1 - i][n - 1 - i - j];
			matrix[n - 1 - i][n - 1 - i - j] = matrix[i + j][n - 1 - i];
			matrix[i + j][n - 1 - i] = matrix[i + 0][i + j];
			matrix[i + 0][i + j] = tmp;
		}
	}
};
