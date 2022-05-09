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
