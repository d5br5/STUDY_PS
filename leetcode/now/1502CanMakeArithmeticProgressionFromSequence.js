/** 8455 2463
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
	arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length - 2; i++) {
		if (arr[i + 2] - arr[i + 1] !== arr[i + 1] - arr[i]) return false;
	}
	return true;
};
