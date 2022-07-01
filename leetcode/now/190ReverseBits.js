/** 6821 8964
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
	let result = 0;
	for (let i = 0; i < 32; i++) {
		result *= 2;
		result += n & 1;
		n >>= 1;
	}
	return result;
};

/** 0865 8491
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
	let mask = 1;
	let result = 0;
	for (let i = 0; i < 32; i++) {
		result *= 2;
		if ((n & mask) != 0) {
			result += 1;
		}
		mask <<= 1;
	}
	return result;
};
