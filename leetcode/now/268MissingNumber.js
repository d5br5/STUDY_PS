/** 8457 8900
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let len = nums.length;
	let total = ((len + 1) * len) / 2;
	return total - nums.reduce((a, b) => a + b, 0);
};

/** 8457 8365
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	let missing = nums.length;
	for (let i = 0; i < nums.length; i++) {
		missing ^= i ^ nums[i];
	}
	return missing;
};
