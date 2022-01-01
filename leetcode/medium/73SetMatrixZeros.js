/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @runtime 29.25%  108ms, @memory 48.59% 41.2Nb
 */

var setZeroes = function (matrix) {
	let ms = [];
	let ns = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				ms.push(i);
				ns.push(j);
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[0].length; j++) {
			if (ms.includes(i) || ns.includes(j)) matrix[i][j] = 0;
		}
	}
};

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * @runtime 10.69% 154ms, @memory 58.51% 41.2MB
 */
var setZeroes = function (matrix) {
	let isCol = false;
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i][0] === 0) isCol = true;
		for (let j = 1; j < matrix[0].length; j++) {
			if (matrix[i][j] === 0) {
				matrix[i][0] = 0;
				matrix[0][j] = 0;
			}
		}
	}

	for (let i = 1; i < matrix.length; i++) {
		for (let j = 1; j < matrix[0].length; j++) {
			if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
		}
	}
	if (matrix[0][0] === 0) {
		for (let i = 0; i < matrix[0].length; i++) {
			matrix[0][i] = 0;
		}
	}
	if (isCol) {
		for (let i = 0; i < matrix.length; i++) {
			matrix[i][0] = 0;
		}
	}
};
