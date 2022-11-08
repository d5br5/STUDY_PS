/** 9896 5966
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
	if (n <= 0) return false;
	while (n > 1) {
		if (n % 3 !== 0) return false;
		n = n / 3;
	}
	return true;
};

/** 9652 9542
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
	if (n <= 0) return false;
	let log = Math.log10(n) / Math.log10(3);
	return parseInt(log) === log;
};
