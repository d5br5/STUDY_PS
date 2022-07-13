/** 4699 7248
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	let sum = 0;
	let arr = [];
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		arr[i] = sum;
	}
	return arr;
};

/** 8684 4849
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
	for (let i = 1; i < nums.length; i++) {
		nums[i] += nums[i - 1];
	}
	return nums;
};
