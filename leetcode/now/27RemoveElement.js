/** 8143 5779
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1);
			i--;
		}
	}
	return nums.length;
};

/** 6646 8709
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let i = 0;
	for (let j = 0; j < nums.length; j++) {
		if (nums[j] !== val) nums[i++] = nums[j];
	}
	return i;
};
