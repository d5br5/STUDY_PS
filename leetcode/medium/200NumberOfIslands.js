/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let count = 0;
	let newmap = Array.from({length: grid.length}, (v, i) =>
		Array.from({length: grid[0].length}, (a, b) => 0)
	);

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "0" || newmap[i][j] === 1) continue;
			paint(i, j);
			count++;
		}
	}

	return count;

	function paint(i, j) {
		if (grid[i][j] === "1") {
			newmap[i][j] = 1;
			if (i < grid.length - 1 && newmap[i + 1][j] === 0) paint(i + 1, j);
			if (j < grid[0].length - 1 && newmap[i][j + 1] === 0) paint(i, j + 1);
			if (i > 0 && newmap[i - 1][j] === 0) paint(i - 1, j);
			if (j > 0 && newmap[i][j - 1] === 0) paint(i, j - 1);
		}
	}
};
