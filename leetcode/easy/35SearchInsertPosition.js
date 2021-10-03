/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length;
	if (nums[0] > target) return 0;
	if (nums[nums.length - 1] < target) return nums.length;
	while (left < right) {
		let middle = parseInt((left + right) / 2);
		if (nums[middle] === target) return middle;
		if (nums[middle] > target) {
			if (nums[middle - 1] < target) {
				return middle;
			}
			right = middle;
		} else {
			if (nums[middle + 1] > target) return middle + 1;
			left = middle + 1;
		}
	}
};
