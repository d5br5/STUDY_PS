/** 9870 5441
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
	let arr = Array.from({ length: 101 }, () => 0);
	for (let num of nums) {
		arr[num]++;
	}
	return arr.reduce((prev, next) => prev + (next * (next - 1)) / 2, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
	let arr = [];
	for (let num of nums) {
		if (arr[num]) {
			arr[num]++;
		} else {
			arr[num] = 1;
		}
	}
	return arr.reduce((prev, next) => prev + (next * (next - 1)) / 2, 0);
};

/** 9394 6613
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
	nums.sort((a, b) => a - b);
	let result = 0;
	let chunk = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) {
			chunk++;
		} else {
			result += (chunk * (chunk - 1)) / 2;
			chunk = 1;
		}
	}
	result += (chunk * (chunk - 1)) / 2;
	return result;
};
