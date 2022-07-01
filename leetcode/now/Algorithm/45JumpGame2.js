/** 1893 3195
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	let result = Array.from({ length: nums.length }, (v, i) => 0);
	for (let i = 0; i < nums.length - 1; i++) {
		for (let j = i + 1; j <= i + nums[i]; j++) {
			if (result[j] === 0 || result[j] < result[i]) result[j] = result[i] + 1;
		}
	}
	return result[result.length - 1];
};

/** 9342 8514
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	let count = 0;
	let start = 0;
	let end = 0;
	while (end < nums.length - 1) {
		let max = 0;
		for (let i = start; i <= end; i++) {
			if (i + nums[i] > max) max = i + nums[i];
		}
		start = end + 1;
		end = max;
		count++;
	}
	return count;
};
