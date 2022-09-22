/** timeout
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	let sum = nums.reduce((prev, next) => prev + next, 0);
	if (sum % 2 !== 0) return false;
	let halfsum = sum / 2;

	return dp(nums, nums.length - 1, halfsum);

	function dp(arr, n, total) {
		if (total === 0) return true;
		if (n === 0 || total < 0) return false;
		return dp(arr, n - 1, total) || dp(arr, n - 1, total - arr[n - 1]);
	}
};

/** 2057 4992
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	let sum = nums.reduce((prev, next) => prev + next, 0);
	if (sum % 2 !== 0) return false;
	let halfsum = sum / 2;

	let result = Array.from({ length: nums.length + 1 }, () =>
		Array.from({ length: halfsum + 1 }, () => false)
	);
	result[0][0] = true;

	for (let i = 1; i <= nums.length; i++) {
		let now = nums[i - 1];
		for (let j = 0; j <= halfsum; j++) {
			if (j < now) {
				result[i][j] = result[i - 1][j];
			} else {
				result[i][j] = result[i - 1][j] || result[i - 1][j - now];
			}
		}
	}
	return result[nums.length][halfsum];
};

/** 4123 6362
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	let sum = nums.reduce((prev, next) => prev + next, 0);
	if (sum % 2 !== 0) return false;
	let half = sum / 2;
	let result = [0];

	for (let i = 0; i < nums.length; i++) {
		let arr = Array.from(new Set(result));
		result = [...arr, ...arr.map((a) => a + nums[i])];
		if (result.indexOf(half) !== -1) return true;
	}
	return result.indexOf(half) !== -1;
};

/** 8069 9978
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	let sum = nums.reduce((prev, next) => prev + next, 0);
	if (sum % 2 !== 0) return false;
	let half = sum / 2;

	let result = Array.from({ length: half + 1 }, () => false);
	result[0] = true;

	for (let num of nums) {
		for (let j = half; j >= num; j--) {
			result[j] = result[j] || result[j - num];
		}
	}

	return result[half];
};
