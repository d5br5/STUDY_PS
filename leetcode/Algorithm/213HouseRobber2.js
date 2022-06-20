/** 7713 0553
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length <= 3) return Math.max(...nums);

	let result1 = Array.from({ length: nums.length }, (v, i) => 0);
	let result2 = Array.from({ length: nums.length }, (v, i) => 0);

	result1[0] = nums[0];
	result2[1] = nums[1];
	result2[2] = nums[2];
	result1[2] = nums[2] + result1[0];
	result2[3] = nums[3] + result2[1];

	for (let i = 3; i < nums.length - 1; i++) {
		result1[i] = nums[i] + Math.max(result1[i - 2], result1[i - 3]);
		result2[i + 1] = nums[i + 1] + Math.max(result2[i - 1], result2[i - 2]);
	}

	console.log(result1);
	console.log(result2);

	return Math.max(
		result1[nums.length - 2],
		result1[nums.length - 3],
		result2[nums.length - 1],
		result2[nums.length - 2]
	);
};
