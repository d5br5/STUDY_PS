/** 0845 0513
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
	let filtered = points.map((a, i) => [...a, i]).filter((a) => a[0] === x || a[1] === y);
	if (filtered.length === 0) return -1;
	let index = 0;
	let dist = 100000;
	let sum = x + y;

	for (let filt of filtered) {
		let now = Math.abs(sum - (filt[0] + filt[1]));
		if (dist > now) {
			dist = now;
			index = filt[2];
		}
	}
	return index;
};

/** 4630 9849
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
	let index = 0;
	let sum = x + y;
	let dist = 100000;
	for (let i = 0; i < points.length; i++) {
		let point = points[i];
		if (point[0] === x || point[1] === y) {
			let now = Math.abs(sum - point[0] - point[1]);
			if (now < dist) {
				dist = now;
				index = i;
			}
		}
	}
	return dist === 100000 ? -1 : index;
};
