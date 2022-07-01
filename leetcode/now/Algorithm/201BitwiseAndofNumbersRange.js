/** 4872 2821
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
	let shift = 0;
	while (left < right) {
		left >>= 1;
		right >>= 1;
		shift++;
	}
	return right << shift;
};

/** brian kernighan
 * 0513 8205
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
	while (left < right) {
		right &= right - 1;
	}
	return left & right;
};
