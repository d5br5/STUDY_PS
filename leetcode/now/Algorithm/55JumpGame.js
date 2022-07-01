/** 6790 7798
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	if (nums.length === 1) return true;
	if (nums[0] === 0) return false;
	let count = 0;
	for (let i = nums.length - 2; i >= 0; i--) {
		let now = nums[i];
		if (now > count) {
			count = 0;
		} else {
			count++;
		}
	}
	return count === 0;
};

/** 7404 9698
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	let last = nums.length - 1;
	for (let i = nums.length - 2; i >= 0; i--) {
		if (i + nums[i] >= last) last = i;
	}
	return last === 0;
};
