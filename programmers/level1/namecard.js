function solution(sizes) {
	let xmax = 0;
	let ymax = 0;
	for (let i = 0; i < sizes.length; i++) {
		if (sizes[i][0] > sizes[i][1]) {
			if (xmax < sizes[i][0]) xmax = sizes[i][0];
			if (ymax < sizes[i][1]) ymax = sizes[i][1];
		} else {
			if (xmax < sizes[i][1]) xmax = sizes[i][1];
			if (ymax < sizes[i][0]) ymax = sizes[i][0];
		}
	}
	return xmax * ymax;
}
