/** 6638 5414
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
	let sum = 0;
	let prod = 1;
	while (n > 0) {
		let digit = n % 10;
		sum += digit;
		prod *= digit;
		n = parseInt(n / 10);
	}
	return prod - sum;
};
