// 5000 8539

function orangesRotting(grid: number[][]): number {
	let time = 0;
	let flag = true;
	let rotten = Array.from({ length: grid.length }, (v, i) => Array.from({ length: grid[0].length }, (c, d) => grid[i][d] === 2));

	while (flag) {
		flag = false;
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[0].length; j++) {
				if (grid[i][j] === 2 && rotten[i][j]) {
					if (i > 0 && grid[i - 1][j] === 1) {
						grid[i - 1][j] = 2;
						flag = true;
					}
					if (j > 0 && grid[i][j - 1] === 1) {
						grid[i][j - 1] = 2;
						flag = true;
					}
					if (i < grid.length - 1 && grid[i + 1][j] === 1) {
						grid[i + 1][j] = 2;
						flag = true;
					}
					if (j < grid[0].length - 1 && grid[i][j + 1] === 1) {
						grid[i][j + 1] = 2;
						flag = true;
					}
				}
			}
		}
		for (let i = 0; i < grid.length; i++) {
			for (let j = 0; j < grid[0].length; j++) {
				rotten[i][j] = grid[i][j] === 2;
			}
		}

		if (flag) {
			time++;
		} else {
			for (let i = 0; i < grid.length; i++) {
				for (let j = 0; j < grid[0].length; j++) {
					if (grid[i][j] === 1) return -1;
				}
			}
		}
	}

	return time;
}
