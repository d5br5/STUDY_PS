/** 1597 0994
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
	for (let i = 0; i < coordinates.length - 2; i++) {
		let [[x1, y1], [x2, y2], [x3, y3]] = [coordinates[i], coordinates[i + 1], coordinates[i + 2]];
		if ((x2 - x1) * (y3 - y2) !== (x3 - x2) * (y2 - y1)) return false;
	}
	return true;
};

/** 9337 1687
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
	if (coordinates.length === 2) return true;
	let [x1, y1] = coordinates[0];
	let [x2, y2] = coordinates[1];
	if (x1 === x2) {
		for (let i = 2; i < coordinates.length; i++) {
			if (coordinates[i][0] !== x1) return false;
		}
		return true;
	}

	if (y1 === y2) {
		for (let i = 2; i < coordinates.length; i++) {
			if (coordinates[i][1] !== y1) return false;
		}
		return true;
	}

	for (let i = 2; i < coordinates.length; i++) {
		let [x3, y3] = coordinates[i];
		if ((x3 - x2) * (y2 - y1) !== (x2 - x1) * (y3 - y2)) return false;
	}
	return true;
};

/** 7892 7319
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
	if (coordinates.length === 2) return true;
	let [x1, y1] = coordinates[0];
	let [x2, y2] = coordinates[1];
	if (x1 === x2) {
		for (let i = 2; i < coordinates.length; i++) {
			if (coordinates[i][0] !== x1) return false;
		}
		return true;
	}

	if (y1 === y2) {
		for (let i = 2; i < coordinates.length; i++) {
			if (coordinates[i][1] !== y1) return false;
		}
		return true;
	}

	for (let i = 2; i < coordinates.length; i++) {
		if ((coordinates[i][0] - x2) * (y2 - y1) !== (x2 - x1) * (coordinates[i][1] - y2)) return false;
	}
	return true;
};
