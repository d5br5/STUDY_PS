/** 6127 1610
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
	let r = heights.length;
	let c = heights[0].length;
	let pac = Array.from({ length: r }, () =>
		Array.from({ length: c }, () => false)
	);
	let atl = Array.from({ length: r }, () =>
		Array.from({ length: c }, () => false)
	);

	let pacQ = [];
	let atlQ = [];

	for (let i = 0; i < r; i++) {
		pacQ.push([i, 0]);
		pac[i][0] = true;
		atlQ.push([i, c - 1]);
		atl[i][c - 1] = true;
	}
	for (let i = 0; i < c; i++) {
		pacQ.push([0, i]);
		pac[0][i] = true;
		atlQ.push([r - 1, i]);
		atl[r - 1][i] = true;
	}

	while (pacQ.length > 0) {
		let [nr, nc] = pacQ.shift();
		if (nr > 0) {
			// up
			if (pac[nr - 1][nc] === false && heights[nr - 1][nc] >= heights[nr][nc]) {
				pac[nr - 1][nc] = true;
				pacQ.push([nr - 1, nc]);
			}
		}
		if (nr < r - 1) {
			// down
			if (pac[nr + 1][nc] === false && heights[nr + 1][nc] >= heights[nr][nc]) {
				pac[nr + 1][nc] = true;
				pacQ.push([nr + 1, nc]);
			}
		}
		if (nc > 0) {
			// left
			if (pac[nr][nc - 1] === false && heights[nr][nc - 1] >= heights[nr][nc]) {
				pac[nr][nc - 1] = true;
				pacQ.push([nr, nc - 1]);
			}
		}
		if (nc < c - 1) {
			// right
			if (pac[nr][nc + 1] === false && heights[nr][nc + 1] >= heights[nr][nc]) {
				pac[nr][nc + 1] = true;
				pacQ.push([nr, nc + 1]);
			}
		}
	}

	while (atlQ.length > 0) {
		let [nr, nc] = atlQ.shift();
		if (nr > 0) {
			// up
			if (atl[nr - 1][nc] === false && heights[nr - 1][nc] >= heights[nr][nc]) {
				atl[nr - 1][nc] = true;
				atlQ.push([nr - 1, nc]);
			}
		}
		if (nr < r - 1) {
			// down
			if (atl[nr + 1][nc] === false && heights[nr + 1][nc] >= heights[nr][nc]) {
				atl[nr + 1][nc] = true;
				atlQ.push([nr + 1, nc]);
			}
		}
		if (nc > 0) {
			// left
			if (atl[nr][nc - 1] === false && heights[nr][nc - 1] >= heights[nr][nc]) {
				atl[nr][nc - 1] = true;
				atlQ.push([nr, nc - 1]);
			}
		}
		if (nc < c - 1) {
			// right
			if (atl[nr][nc + 1] === false && heights[nr][nc + 1] >= heights[nr][nc]) {
				atl[nr][nc + 1] = true;
				atlQ.push([nr, nc + 1]);
			}
		}
	}

	let result = [];
	for (let i = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			if (atl[i][j] && pac[i][j]) result.push([i, j]);
		}
	}

	return result;
};
