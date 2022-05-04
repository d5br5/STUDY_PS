/** 6868 0661
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	const log = Math.log2(n);
	return parseInt(log) === log;
};
