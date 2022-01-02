/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
	let total = 1;
	let zerocount = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			zerocount++;
		} else {
			total *= nums[i];
		}
	}

	if (zerocount > 1) return Array.from({length: nums.length}, (a, b) => 0);

	let arr = [];

	if (zerocount === 1) {
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] === 0) {
				arr.push(total);
			} else {
				arr.push(0);
			}
		}
	} else {
		for (let i = 0; i < nums.length; i++) {
			arr.push(total / nums[i]);
		}
	}
	return arr;
};
