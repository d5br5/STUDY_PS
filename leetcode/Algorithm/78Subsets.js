/** 9560 4582
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	let result = [[]];
	for (let i = 0; i < nums.length; i++) {
		result = [...result, ...result.map((a) => [...a, nums[i]])];
	}
	return result;
};
