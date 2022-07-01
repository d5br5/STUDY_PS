/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
	let arr = [];
	for (let i = 0; i < nums.length; i++) {
		if (arr.includes(nums[i])) return nums[i];
		arr.push(nums[i]);
	}
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
	let arr = [];
	for (let i = 0; i < nums.length; i++) {
		if (arr[nums[i]]) return nums[i];
		arr[nums[i]] = nums[i];
	}
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
	let arr = new Set();
	for (let i = 0; i < nums.length; i++) {
		if (arr.has(nums[i])) return nums[i];
		arr.add(nums[i]);
	}
};
