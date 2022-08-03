/** 6119 4414
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
	let [m, n] = [mat.length, mat[0].length];
	if (m * n !== r * c) return mat;

	let result = [];

	for (let i = 0; i < r; i++) {
		let now = [];
		for (let j = 0; j < c; j++) {
			let index = i * c + j;
			let row = parseInt(index / n);
			let col = index % n;
			now.push(mat[row][col]);
		}
		result.push(now);
	}
	return result;
};
