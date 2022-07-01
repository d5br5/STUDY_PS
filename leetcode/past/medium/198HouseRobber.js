/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length === 1) return nums[0];
	if (nums.length === 2) return Math.max(nums[0], nums[1]);
	let result = [nums[0], nums[1], nums[0] + nums[2]];
	for (let i = 3; i < nums.length; i++) {
		result.push(Math.max(result[i - 2], result[i - 3]) + nums[i]);
	}
	let len = result.length;
	return Math.max(result[len - 1], result[len - 2]);
};
