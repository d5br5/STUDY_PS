/** 8259 7657
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	while (n >= 10) {
		let result = 0;
		while (n > 0) {
			result += (n % 10) ** 2;
			n = parseInt(n / 10);
		}
		n = result;
	}
	return n === 1 || n === 7;
};
