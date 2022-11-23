/** 7618 8072
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	let result = 0;
	while (result ** 2 < x) {
		result++;
	}
	return result ** 2 === x ? result : result - 1;
};

/** 8515 4838
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	if (x < 2) return x;
	let result = 2;
	while (result ** 2 < x) {
		result *= 2;
	}
	while (result ** 2 > x) {
		result -= 1;
	}
	return result;
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	if (x < 2) return x;
	let left = 2;
	let right = parseInt(x / 2);
	while (left < right) {
		let mid = parseInt((left + right) / 2);
		if (mid ** 2 > x) {
			right = mid - 1;
		} else {
			left = mid;
		}
	}
	return right;
};

/** 9650 5664
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	if (x < 2) return x;
	let left = 2;
	let right = parseInt(x / 2);
	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		if (mid ** 2 > x) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return right;
};

/** 9759 8324
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	if (x < 2) return x;
	let left = mySqrt(x >> 2) << 1;
	let right = left + 1;
	return right ** 2 > x ? left : right;
};
