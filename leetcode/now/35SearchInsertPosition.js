/**
 * 3891 7976
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left + 1 < right) {
		let middle = Math.floor((left + right) / 2);
		if (nums[middle] === target) return middle;
		if (nums[middle] < target) {
			left = middle;
		} else {
			right = middle;
		}
	}
	if (nums[left] >= target) return left;
	if (nums[right] < target) return right + 1;
	return right;
};

/**
 * 2358 9922
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		if (nums[middle] === target) return middle;
		if (nums[middle] < target) {
			left = middle + 1;
		} else {
			right = middle - 1;
		}
	}
	return left;
};
