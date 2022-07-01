/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
	let tmp = -1;
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = 0; j < nums.length - 1 - i; j++) {
			if (nums[j] > nums[j + 1]) {
				tmp = nums[j];
				nums[j] = nums[j + 1];
				nums[j + 1] = tmp;
			}
		}
	}
	console.log(nums);
};
