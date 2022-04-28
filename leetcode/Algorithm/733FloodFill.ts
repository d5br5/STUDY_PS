//4542 4510

function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
	const target = image[sr][sc];
	start([sr, sc]);

	function start(coord) {
		let [row, col] = coord;
		if (image[row][col] === newColor) return;
		image[row][col] = newColor;
		if (row > 0 && image[row - 1][col] === target) start([row - 1, col]);
		if (col > 0 && image[row][col - 1] === target) start([row, col - 1]);
		if (row < image.length - 1 && image[row + 1][col] === target) start([row + 1, col]);
		if (col < image[0].length - 1 && image[row][col + 1] === target) start([row, col + 1]);
	}

	return image;
}
