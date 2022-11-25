/** 9571 4980
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	nums.sort((a, b) => a - b);
	let num = 0;
	let max = 0;
	let cnt = 1;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] === nums[i]) {
			cnt++;
		} else {
			if (max < cnt) {
				max = cnt;
				num = nums[i - 1];
			}
			cnt = 1;
		}
	}
	return max < cnt ? nums[nums.length - 1] : num;
};

/** 9880 9930
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	let count = 1;
	let now = nums[0];
	for (let i = 1; i < nums.length; i++) {
		count += now === nums[i] ? 1 : -1;
		if (count < 0) {
			count = 1;
			now = nums[i];
		}
	}
	return now;
};
