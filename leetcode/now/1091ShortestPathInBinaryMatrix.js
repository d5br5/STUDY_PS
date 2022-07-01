/** time exceed
 * ok 73 / 89
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) return -1;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) grid[i][j] = -1;
		}
	}

	grid[0][0] = 1;
	DFS(0, 0);

	return grid[grid.length - 1][grid.length - 1] === 0 ? -1 : grid[grid.length - 1][grid.length - 1];

	function DFS(i, j) {
		if (i > 0 && j > 0 && (grid[i - 1][j - 1] > grid[i][j] + 1 || grid[i - 1][j - 1] === 0)) {
			grid[i - 1][j - 1] = grid[i][j] + 1;
			DFS(i - 1, j - 1);
		}
		if (i > 0 && (grid[i - 1][j] > grid[i][j] + 1 || grid[i - 1][j] === 0)) {
			grid[i - 1][j] = grid[i][j] + 1;
			DFS(i - 1, j);
		}
		if (
			i > 0 &&
			j < grid.length - 1 &&
			(grid[i - 1][j + 1] > grid[i][j] + 1 || grid[i - 1][j + 1] === 0)
		) {
			grid[i - 1][j + 1] = grid[i][j] + 1;
			DFS(i - 1, j + 1);
		}
		if (j > 0 && (grid[i][j - 1] > grid[i][j] + 1 || grid[i][j - 1] === 0)) {
			grid[i][j - 1] = grid[i][j] + 1;
			DFS(i, j - 1);
		}
		if (j < grid.length - 1 && (grid[i][j + 1] > grid[i][j] + 1 || grid[i][j + 1] === 0)) {
			grid[i][j + 1] = grid[i][j] + 1;
			DFS(i, j + 1);
		}
		if (
			i < grid.length - 1 &&
			j > 0 &&
			(grid[i + 1][j - 1] > grid[i][j] + 1 || grid[i + 1][j - 1] === 0)
		) {
			grid[i + 1][j - 1] = grid[i][j] + 1;
			DFS(i + 1, j - 1);
		}
		if (i < grid.length - 1 && (grid[i + 1][j] > grid[i][j] + 1 || grid[i + 1][j] === 0)) {
			grid[i + 1][j] = grid[i][j] + 1;
			DFS(i + 1, j);
		}
		if (
			i < grid.length - 1 &&
			j < grid.length - 1 &&
			(grid[i + 1][j + 1] > grid[i][j] + 1 || grid[i + 1][j + 1] === 0)
		) {
			grid[i + 1][j + 1] = grid[i][j] + 1;
			DFS(i + 1, j + 1);
		}
	}
};

/**
 * time exceed
 * ok 84 / 89
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) return -1;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) grid[i][j] = -1;
		}
	}

	let stack = [[0, 0]];
	grid[0][0] = 1;

	while (stack.length > 0) {
		let [i, j] = stack.pop();
		DFS(i, j);
	}

	return grid[grid.length - 1][grid.length - 1] === 0 ? -1 : grid[grid.length - 1][grid.length - 1];

	function DFS(i, j) {
		if (i > 0 && j > 0 && (grid[i - 1][j - 1] > grid[i][j] + 1 || grid[i - 1][j - 1] === 0)) {
			grid[i - 1][j - 1] = grid[i][j] + 1;
			stack.push([i - 1, j - 1]);
		}
		if (i > 0 && (grid[i - 1][j] > grid[i][j] + 1 || grid[i - 1][j] === 0)) {
			grid[i - 1][j] = grid[i][j] + 1;
			stack.push([i - 1, j]);
		}
		if (
			i > 0 &&
			j < grid.length - 1 &&
			(grid[i - 1][j + 1] > grid[i][j] + 1 || grid[i - 1][j + 1] === 0)
		) {
			grid[i - 1][j + 1] = grid[i][j] + 1;
			stack.push([i - 1, j + 1]);
		}
		if (j > 0 && (grid[i][j - 1] > grid[i][j] + 1 || grid[i][j - 1] === 0)) {
			grid[i][j - 1] = grid[i][j] + 1;
			stack.push([i, j - 1]);
		}
		if (j < grid.length - 1 && (grid[i][j + 1] > grid[i][j] + 1 || grid[i][j + 1] === 0)) {
			grid[i][j + 1] = grid[i][j] + 1;
			stack.push([i, j + 1]);
		}
		if (
			i < grid.length - 1 &&
			j > 0 &&
			(grid[i + 1][j - 1] > grid[i][j] + 1 || grid[i + 1][j - 1] === 0)
		) {
			grid[i + 1][j - 1] = grid[i][j] + 1;
			stack.push([i + 1, j - 1]);
		}
		if (i < grid.length - 1 && (grid[i + 1][j] > grid[i][j] + 1 || grid[i + 1][j] === 0)) {
			grid[i + 1][j] = grid[i][j] + 1;
			stack.push([i + 1, j]);
		}
		if (
			i < grid.length - 1 &&
			j < grid.length - 1 &&
			(grid[i + 1][j + 1] > grid[i][j] + 1 || grid[i + 1][j + 1] === 0)
		) {
			grid[i + 1][j + 1] = grid[i][j] + 1;
			stack.push([i + 1, j + 1]);
		}
	}
};

/** 6941 5217
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) return -1;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) grid[i][j] = -1;
		}
	}

	let stack = [[0, 0]];
	grid[0][0] = 1;

	while (stack.length > 0) {
		let [i, j] = stack.shift();
		DFS(i, j);
	}

	return grid[grid.length - 1][grid.length - 1] === 0 ? -1 : grid[grid.length - 1][grid.length - 1];

	function DFS(i, j) {
		if (i > 0 && j > 0 && grid[i - 1][j - 1] === 0) {
			grid[i - 1][j - 1] = grid[i][j] + 1;
			stack.push([i - 1, j - 1]);
		}
		if (i > 0 && grid[i - 1][j] === 0) {
			grid[i - 1][j] = grid[i][j] + 1;
			stack.push([i - 1, j]);
		}
		if (i > 0 && j < grid.length - 1 && grid[i - 1][j + 1] === 0) {
			grid[i - 1][j + 1] = grid[i][j] + 1;
			stack.push([i - 1, j + 1]);
		}
		if (j > 0 && grid[i][j - 1] === 0) {
			grid[i][j - 1] = grid[i][j] + 1;
			stack.push([i, j - 1]);
		}
		if (j < grid.length - 1 && grid[i][j + 1] === 0) {
			grid[i][j + 1] = grid[i][j] + 1;
			stack.push([i, j + 1]);
		}
		if (i < grid.length - 1 && j > 0 && grid[i + 1][j - 1] === 0) {
			grid[i + 1][j - 1] = grid[i][j] + 1;
			stack.push([i + 1, j - 1]);
		}
		if (i < grid.length - 1 && grid[i + 1][j] === 0) {
			grid[i + 1][j] = grid[i][j] + 1;
			stack.push([i + 1, j]);
		}
		if (i < grid.length - 1 && j < grid.length - 1 && grid[i + 1][j + 1] === 0) {
			grid[i + 1][j + 1] = grid[i][j] + 1;
			stack.push([i + 1, j + 1]);
		}
	}
};

/** 9314 5485
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
	if (grid[0][0] === 1 || grid[grid.length - 1][grid.length - 1] === 1) return -1;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) grid[i][j] = -1;
		}
	}

	let stack = [[0, 0]];
	grid[0][0] = 1;

	while (stack.length > 0) {
		let [i, j] = stack.shift();
		if (DFS(i, j) === 1) return grid[grid.length - 1][grid.length - 1];
	}

	return grid[grid.length - 1][grid.length - 1] === 0 ? -1 : grid[grid.length - 1][grid.length - 1];

	function DFS(i, j) {
		if (i > 0 && j > 0 && grid[i - 1][j - 1] === 0) {
			grid[i - 1][j - 1] = grid[i][j] + 1;
			stack.push([i - 1, j - 1]);
		}
		if (i > 0 && grid[i - 1][j] === 0) {
			grid[i - 1][j] = grid[i][j] + 1;
			stack.push([i - 1, j]);
		}
		if (i > 0 && j < grid.length - 1 && grid[i - 1][j + 1] === 0) {
			grid[i - 1][j + 1] = grid[i][j] + 1;
			stack.push([i - 1, j + 1]);
		}
		if (j > 0 && grid[i][j - 1] === 0) {
			grid[i][j - 1] = grid[i][j] + 1;
			stack.push([i, j - 1]);
		}
		if (j < grid.length - 1 && grid[i][j + 1] === 0) {
			grid[i][j + 1] = grid[i][j] + 1;
			if (i === grid.length - 1 && j + 1 === grid.length - 1) return 1;
			stack.push([i, j + 1]);
		}
		if (i < grid.length - 1 && j > 0 && grid[i + 1][j - 1] === 0) {
			grid[i + 1][j - 1] = grid[i][j] + 1;
			stack.push([i + 1, j - 1]);
		}
		if (i < grid.length - 1 && grid[i + 1][j] === 0) {
			grid[i + 1][j] = grid[i][j] + 1;
			if (i + 1 === grid.length - 1 && j === grid.length - 1) return 1;
			stack.push([i + 1, j]);
		}
		if (i < grid.length - 1 && j < grid.length - 1 && grid[i + 1][j + 1] === 0) {
			grid[i + 1][j + 1] = grid[i][j] + 1;
			if (i + 1 === grid.length - 1 && j + 1 === grid.length - 1) return 1;
			stack.push([i + 1, j + 1]);
		}
		return 0;
	}
};
