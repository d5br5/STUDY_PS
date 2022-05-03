/** 4179 9917
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	if (n === 1) return 1;
	if (n === 2) return 2;
	let one = 1;
	let two = 2;
	let result = 2;
	for (let i = 0; i < n - 2; i++) {
		result = one + two;
		one = two;
		two = result;
	}
	return result;
};
