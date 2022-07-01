/** 2485 4460
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
	let result = Array.from({ length: triangle.length }, (v, i) => Array.from({ length: triangle[i].length }, (c, d) => 0));
	result[0][0] = triangle[0][0];
	for (let i = 1; i < triangle.length; i++) {
		for (let j = 0; j < triangle[i].length; j++) {
			if (j === 0) {
				result[i][j] = result[i - 1][j];
			} else if (j === triangle[i].length - 1) {
				result[i][j] = result[i - 1][j - 1];
			} else {
				result[i][j] = Math.min(result[i - 1][j - 1], result[i - 1][j]);
			}
			result[i][j] += triangle[i][j];
		}
	}
	return Math.min(...result[triangle.length - 1]);
};

/** 2778 6944
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
	for (let i = 1; i < triangle.length; i++) {
		for (let j = 0; j < triangle[i].length; j++) {
			if (j === 0) {
				triangle[i][j] += triangle[i - 1][j];
			} else if (j === triangle[i].length - 1) {
				triangle[i][j] += triangle[i - 1][j - 1];
			} else {
				triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]);
			}
		}
	}
	return Math.min(...triangle[triangle.length - 1]);
};
