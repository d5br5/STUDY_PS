/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
	let result = [];
	for (let i = 0; i < numRows; i++) {
		result.push(Array.from({ length: i + 1 }, (v, i) => 1));
	}
	for (let i = 2; i < numRows; i++) {
		for (let j = 1; j < i; j++) {
			result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
		}
	}
	return result;
};
