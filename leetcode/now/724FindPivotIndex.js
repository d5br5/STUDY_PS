/** 7005 4891
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	let sum = nums.reduce((prev, curr) => prev + curr, 0);
	let now = 0;
	for (let i = 0; i < nums.length; i++) {
		if ((sum - nums[i]) / 2 === now) return i;
		now += nums[i];
	}
	return -1;
};

/** 8068 8806
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	if (nums.length === 1) return 0;
	let sum = nums.reduce((prev, curr) => prev + curr, 0);
	let now = 0;
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		if (sum - now - num === now) return i;
		now += num;
	}
	return -1;
};
