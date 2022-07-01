/** 6868 0661
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	const log = Math.log2(n);
	return parseInt(log) === log;
};

/** 8166 2378
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
	if (n === 0) return false;
	let x = BigInt(n);
	return (x & -x) == x;
	// return ((x-1)&x) == 0;
};
