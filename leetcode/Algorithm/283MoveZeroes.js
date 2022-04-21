/** 1194 8680 best
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let left = nums.indexOf(0);
	let right = left;
	while (right < nums.length) {
		if (nums[right] !== 0) {
			let tmp = nums[right];
			nums[right] = 0;
			nums[left++] = tmp;
		}
		right++;
	}
};
