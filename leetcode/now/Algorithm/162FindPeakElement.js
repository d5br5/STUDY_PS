/** 9209 9937
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	return nums.indexOf(Math.max(...nums));
};

/** 7533 3411
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] > nums[i + 1]) return i;
	}
	return nums.length - 1;
};

/** 1690 0697
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
	let left = 0;
	let right = nums.length - 1;
	while (left < right) {
		let mid = parseInt((left + right) / 2);
		if (nums[mid] < nums[mid + 1]) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}
	return left;
};
