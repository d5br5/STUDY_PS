/** 2963 9654
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
	let realLeft = 0;
	let left = 0;
	let right = nums.length - 1;
	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	if (nums[left] !== target) {
		return [-1, -1];
	} else {
		realLeft = left;
	}

	// left = 0; 2429 2207
	right = nums.length - 1;
	while (left < right) {
		let mid = Math.ceil((left + right) / 2);
		if (nums[mid] > target) {
			right = mid - 1;
		} else {
			left = mid;
		}
	}

	return [realLeft, right];
};
