/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
	let route = Array.from({length: grid.length}, (a, b) =>
		Array.from({length: grid[0].length}, (c, d) => 0)
	);
	route[0][0] = grid[0][0];
	for (let i = 1; i < grid.length; i++) {
		route[i][0] = route[i - 1][0] + grid[i][0];
	}
	for (let i = 1; i < grid[0].length; i++) {
		route[0][i] = route[0][i - 1] + grid[0][i];
	}
	for (let i = 1; i < grid.length; i++) {
		for (let j = 1; j < grid[0].length; j++) {
			route[i][j] = Math.min(route[i - 1][j], route[i][j - 1]) + grid[i][j];
		}
	}
	return route[grid.length - 1][grid[0].length - 1];
};
