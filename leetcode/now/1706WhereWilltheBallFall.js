/** 4007 5869
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
	let result = [];
	let n = grid[0].length;
	for (let i = 0; i < n; i++) {
		let now = i;
		let didBreak = false;
		for (let j = 0; j < grid.length; j++) {
			if (grid[j][now] === 1) {
				if (now + 1 < n && grid[j][now + 1] === 1) {
					now++;
				} else {
					didBreak = true;
					break;
				}
			} else {
				if (now - 1 >= 0 && grid[j][now - 1] === -1) {
					now--;
				} else {
					didBreak = true;
					break;
				}
			}
		}
		result.push(didBreak ? -1 : now);
	}
	return result;
};

/** 7801 5124
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
	let result = [];
	let n = grid[0].length;
	for (let i = 0; i < n; i++) {
		let now = i;
		let didBreak = false;
		for (let j = 0; j < grid.length; j++) {
			if (
				(grid[j][now] === 1 && now + 1 < n && grid[j][now + 1] === 1) ||
				(grid[j][now] === -1 && now - 1 >= 0 && grid[j][now - 1] === -1)
			) {
				now += grid[j][now];
			} else {
				didBreak = true;
				break;
			}
		}
		result.push(didBreak ? -1 : now);
	}
	return result;
};
