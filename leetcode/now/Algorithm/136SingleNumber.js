/** 1501 5779
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		if (result.includes(nums[i])) {
			result.splice(result.indexOf(nums[i]), 1);
		} else {
			result.push(nums[i]);
		}
	}
	return result[0];
};

/** 7479 4787
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let sumSet = 0;
	let sumFull = 0;
	for (let i = 0; i < nums.length; i++) {
		sumFull += nums[i];
	}
	let set = new Set(nums);
	let arrset = Array.from(set);
	for (let i = 0; i < arrset.length; i++) {
		sumSet += arrset[i];
	}
	return sumSet * 2 - sumFull;
};

/** 3436 7986
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let result = 0;
	for (let i = 0; i < nums.length; i++) {
		result ^= nums[i];
	}
	return result;
};

/** 5248 5985
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let result = 0;
	nums.map((a) => (result ^= a));
	return result;
};

/** 8975 9093
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	return nums.reduce((a, b) => (a ^= b));
};
