/** 2428 6017
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	if (n === 0) return 0;
	let count = 0;
	while (n > 1) {
		if (n % 2 === 1) count++;
		n = parseInt(n / 2);
	}
	return count + 1;
};

/** 7886 9465
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	let count = 0;
	let mask = 1;
	for (let i = 0; i < 32; i++) {
		if ((n & mask) != 0) count++;
		mask <<= 1;
	}
	return count;
};

/** 5246 9990
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
	let count = 0;
	while (n != 0) {
		count++;
		n &= n - 1;
	}
	return count;
};
