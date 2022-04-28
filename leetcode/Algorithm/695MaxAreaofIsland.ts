// 6618 5539

function maxAreaOfIsland(grid: number[][]): number {
	let max = 0;
	let maps = Array.from({ length: grid.length }, (v, i) => Array.from({ length: grid[0].length }, (c, d) => false));

	let count = 0;

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1 && !maps[i][j]) {
				count = 0;
				DFS(i, j);
				if (count > max) max = count;
			}
		}
	}

	function DFS(x, y) {
		maps[x][y] = true;
		count++;
		if (x > 0 && grid[x - 1][y] === 1 && !maps[x - 1][y]) DFS(x - 1, y); // 위
		if (y > 0 && grid[x][y - 1] === 1 && !maps[x][y - 1]) DFS(x, y - 1); // 왼쪽
		if (x < grid.length - 1 && grid[x + 1][y] === 1 && !maps[x + 1][y]) DFS(x + 1, y); // 아래
		if (y < grid[0].length - 1 && grid[x][y + 1] === 1 && !maps[x][y + 1]) DFS(x, y + 1); // 오른쪽
	}

	return max;
}
