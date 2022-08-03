/** 7741 4063
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
	let len = mat.length;
	let sum = 0;
	for (let i = 0; i < len; i++) {
		sum += mat[i][i] + mat[i][len - 1 - i];
	}
	if (len % 2 !== 0) {
		let point = parseInt(len / 2);
		sum -= mat[point][point];
	}
	return sum;
};
