/** 7284 1605
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
	nums.sort((a, b) => b - a);
	let median = nums[parseInt((nums.length - 1) / 2)];
	return nums.reduce((prev, curr) => prev + Math.abs(curr - median), 0);
};

/** 3951 9877
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
	nums.sort((a, b) => a - b);
	let sum = 0;
	let l = 0,
		r = nums.length - 1;
	while (l < r) {
		sum += nums[r--] - nums[l++];
	}
	return sum;
};
