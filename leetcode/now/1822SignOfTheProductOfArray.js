/** 2295 2179
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
	let sign = true;
	for (let num of nums) {
		if (num === 0) return 0;
		if (num < 0) sign = !sign;
	}
	return sign ? 1 : -1;
};

/** 7568 2789
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
	let count = 0;
	for (let num of nums) {
		if (num === 0) return 0;
		if (num < 0) count++;
	}
	return count % 2 === 0 ? 1 : -1;
};

/** 9074 6379
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
	let result = nums.reduce((a, b) => a * b, 1);
	if (isNaN(result)) return 0;
	if (result === 0) return 0;
	if (result > 0) return 1;
	return -1;
};
