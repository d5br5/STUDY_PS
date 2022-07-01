/** 3772 5554
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length === 1) return nums[0];
	let result = Array.from({ length: nums.length }, (v, i) => 0);
	result[0] = nums[0];
	if (nums.length > 1) result[1] = nums[1];
	if (nums.length > 2) result[2] = nums[2] + nums[0];
	for (let i = 3; i < nums.length; i++) {
		result[i] = nums[i] + Math.max(result[i - 2], result[i - 3]);
	}

	return Math.max(result[nums.length - 1], result[nums.length - 2]);
};
