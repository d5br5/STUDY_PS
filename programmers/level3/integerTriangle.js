function solution(triangle) {
	let maxarr = [];
	for (let i = 0; i < triangle.length; i++) {
		maxarr.push([]);
	}
	maxarr[0][0] = triangle[0][0];
	for (let i = 1; i < triangle.length; i++) {
		for (let j = 0; j < triangle[i].length; j++) {
			if (j === 0) {
				maxarr[i][j] = triangle[i][j] + maxarr[i - 1][j];
			} else if (j === triangle[i].length - 1) {
				maxarr[i][j] = triangle[i][j] + maxarr[i - 1][j - 1];
			} else {
				maxarr[i][j] =
					triangle[i][j] + Math.max(maxarr[i - 1][j - 1], maxarr[i - 1][j]);
			}
		}
	}
	return Math.max(...maxarr[maxarr.length - 1]);
}

const triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];

console.log(solution(triangle));
