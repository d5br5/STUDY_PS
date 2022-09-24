/** 8735 9244
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	if (x < 0 || (x !== 0 && x % 10 === 0)) return false;
	x = x.toString();
	for (let i = 0; i < x.length / 2 + 1; i++) {
		if (x[i] !== x[x.length - 1 - i]) return false;
	}
	return true;
};
