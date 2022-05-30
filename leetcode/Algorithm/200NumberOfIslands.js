/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let count = 0;
	let visited = Array.from({ length: grid.length }, (a, b) =>
		Array.from({ length: grid[0].length }, (c, d) => false)
	);

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "1" && !visited[i][j]) {
				count++;
				check(i, j);
			}
		}
	}

	function check(i, j) {
		let stack = [[i, j]];
		while (stack.length > 0) {
			let [a, b] = stack.pop();
			visited[a][b] = true;
			if (a > 0 && grid[a - 1][b] === "1" && !visited[a - 1][b]) stack.push([a - 1, b]);
			if (a < grid.length - 1 && grid[a + 1][b] === "1" && !visited[a + 1][b])
				stack.push([a + 1, b]);
			if (b > 0 && grid[a][b - 1] === "1" && !visited[a][b - 1]) stack.push([a, b - 1]);
			if (b < grid[0].length - 1 && grid[a][b + 1] === "1" && !visited[a][b + 1])
				stack.push([a, b + 1]);
		}
	}

	return count;
};

/** 9251 5486
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === "1") {
				count++;
				check(i, j);
			}
		}
	}

	function check(i, j) {
		grid[i][j] = false;
		if (i > 0 && grid[i - 1][j] === "1") check(i - 1, j);
		if (i < grid.length - 1 && grid[i + 1][j] === "1") check(i + 1, j);
		if (j > 0 && grid[i][j - 1] === "1") check(i, j - 1);
		if (j < grid[0].length - 1 && grid[i][j + 1] === "1") check(i, j + 1);
	}

	return count;
};
