/** 7391 7462
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	let result = [];
	let rowDir = 1;
	let colDir = 1;
	let isRowNow = true;

	let len = matrix.length * matrix[0].length;

	let row = 0;
	let col = 0;

	for (let i = 0; i < len; i++) {
		result.push(matrix[row][col]);
		matrix[row][col] = false;
		if (isRowNow) {
			if (rowDir === 1) {
				if (col + 1 < matrix[0].length && matrix[row][col + 1] !== false) {
					col++;
				} else {
					isRowNow = false;
					row++;
					colDir = 1;
				}
			} else {
				if (col - 1 >= 0 && matrix[row][col - 1] !== false) {
					col--;
				} else {
					isRowNow = false;
					row--;
					colDir = -1;
				}
			}
		} else {
			if (colDir === 1) {
				if (row + 1 < matrix.length && matrix[row + 1][col] !== false) {
					row++;
				} else {
					isRowNow = true;
					col--;
					rowDir = -1;
				}
			} else {
				if (row - 1 >= 0 && matrix[row - 1][col] !== false) {
					row--;
				} else {
					isRowNow = true;
					col++;
					rowDir = 1;
				}
			}
		}
	}

	return result;
};

/** 6737 9115
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	let result = [];
	let dir = 1;
	let isRowNow = true;

	let len = matrix.length * matrix[0].length;

	let row = 0;
	let col = 0;

	for (let i = 0; i < len; i++) {
		result.push(matrix[row][col]);
		matrix[row][col] = false;

		if (isRowNow) {
			if (
				(dir === 1 && col + 1 < matrix[0].length && matrix[row][col + 1] !== false) ||
				(dir === -1 && col - 1 >= 0 && matrix[row][col - 1] !== false)
			) {
				col += dir;
				continue;
			}
			isRowNow = false;
			row += dir;
		} else {
			if (
				(dir === 1 && row + 1 < matrix.length && matrix[row + 1][col] !== false) ||
				(dir === -1 && row - 1 >= 0 && matrix[row - 1][col] !== false)
			) {
				row += dir;
				continue;
			}
			col -= dir;
			dir *= -1;
			isRowNow = true;
		}
	}

	return result;
};

/** 8737 6216
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	let result = [];
	let [m, n] = [matrix.length, matrix[0].length];
	let [left, right, top, bottom] = [0, n - 1, 1, m - 1];
	let dir = 1;
	let isRowNow = true;
	let len = m * n;
	let row = 0,
		col = 0;

	for (let i = 0; i < len; i++) {
		result.push(matrix[row][col]);
		if (dir === 1) {
			if (isRowNow) {
				if (col < right) {
					col += dir;
				} else {
					isRowNow = false;
					row += dir;
					right--;
				}
			} else {
				if (row < bottom) {
					row += dir;
				} else {
					isRowNow = true;
					dir *= -1;
					col += dir;
					bottom--;
				}
			}
		} else {
			if (isRowNow) {
				if (col > left) {
					col += dir;
				} else {
					isRowNow = false;
					row += dir;
					left++;
				}
			} else {
				if (row > top) {
					row += dir;
				} else {
					isRowNow = true;
					dir *= -1;
					col += dir;
					top++;
				}
			}
		}
	}

	return result;
};
