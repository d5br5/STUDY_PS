/** 5402 8885
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	nums.sort((a, b) => a - b);
	const result = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) break;
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		let left = i + 1;
		let right = nums.length - 1;
		while (left < right) {
			let sum = nums[i] + nums[left] + nums[right];
			if (sum === 0) {
				result.push([nums[i], nums[left], nums[right]]);
			}
			if (sum >= 0) {
				while (nums[right] === nums[right - 1]) {
					right--;
				}
				right--;
			}
			if (sum <= 0) {
				while (nums[left] === nums[left + 1]) {
					left++;
				}
				left++;
			}
		}
	}
	return result;
};
