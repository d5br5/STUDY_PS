/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;

	return bs(left, right);

	function bs(left, right) {
		if (right == left + 1) {
			if (nums[right] === target) return right;
			if (nums[left] === target) return left;
			return -1;
		}
		let middle = Math.floor((left + right) / 2);
		if (nums[middle] === target) return middle;
		if (nums[middle] < target) {
			return bs(middle, right);
		} else {
			return bs(left, middle);
		}
	}
};

/** 86.32 39.45
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
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

	if (nums[left] === target) return left;
	if (nums[right] === target) return right;
	return -1;
};

/** 46.88 39.45
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;

	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) return mid;
		if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
};
