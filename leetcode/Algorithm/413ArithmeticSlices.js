/** 3549 2716
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
	if (nums.length < 3) return 0;

	let result = 0;
	let now = 2;

	while (now < nums.length) {
		let count = 0;
		while (nums[now - 2] + nums[now] === 2 * nums[now - 1]) {
			count++;
			now++;
		}
		result += (count * (count + 1)) / 2;
		now++;
	}
	return result;
};

/** 1049 7037
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
	if (nums.length < 3) return 0;
	let arr = Array.from({ length: nums.length }, () => 0);
	let result = 0;

	for (let i = 2; i < nums.length; i++) {
		if (nums[i - 2] + nums[i] === 2 * nums[i - 1]) {
			arr[i] = arr[i - 1] + 1;
			result += arr[i];
		}
	}

	return result;
};

/** 9352 5123
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
	if (nums.length < 3) return 0;

	let result = 0;
	let dp = 0;

	for (let i = 2; i < nums.length; i++) {
		if (nums[i - 2] + nums[i] === 2 * nums[i - 1]) {
			dp++;
			result += dp;
		} else {
			dp = 0;
		}
	}
	return result;
};
