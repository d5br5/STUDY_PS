/** 8251 4292
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	let left = 0;
	let right = nums.length - 1;
	while (nums[left] > nums[right]) {
		let mid = parseInt((left + right) / 2);
		if (nums[mid] >= nums[left]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	return nums[left];
};
