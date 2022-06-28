/** 4008 8214
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
	if (points.length === 1) return 1;
	let max = 0;
	for (let i = 0; i < points.length - 1; i++) {
		for (let j = i + 1; j < points.length; j++) {
			let count = 0;
			let [x1, y1, x2, y2] = [...points[i], ...points[j]];
			if (x1 === x2) {
				for (let k = 0; k < points.length; k++) {
					if (points[k][0] === x1) count++;
				}
			} else {
				for (let k = 0; k < points.length; k++) {
					let [x, y] = points[k];
					if ((y - y1) * (x - x2) === (x - x1) * (y - y2)) count++;
				}
			}
			if (max < count) max = count;
		}
	}
	return max;
};
