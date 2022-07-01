/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	let left = 0;
	let right = 0;
	let result = [];

	if (nums[0] >= 0) {
		for (let i = 0; i < nums.length; i++) {
			result.push(nums[i] * nums[i]);
		}
	} else if (nums[nums.length - 1] <= 0) {
		for (let i = 0; i < nums.length; i++) {
			result.push(nums[nums.length - 1 - i] * nums[nums.length - 1 - i]);
		}
	} else {
		for (let i = 0; i < nums.length; i++) {
			if (nums[i] >= 0) {
				right = i;
				left = i - 1;
				break;
			}
		}
		while (right - left < nums.length) {
			if (nums[right] + nums[left] === 0) {
				result.push(nums[left] * nums[left]);
				result.push(nums[left] * nums[left]);
				right += 1;
				left -= 1;
			} else if (nums[right] + nums[left] > 0) {
				result.push(nums[left] * nums[left]);
				left -= 1;
			} else {
				result.push(nums[right] * nums[right]);
				right += 1;
			}

			if (left < 0) {
				for (let i = right; i < nums.length; i++) {
					result.push(nums[i] * nums[i]);
				}
				break;
			}

			if (right >= nums.length) {
				for (let i = left; i >= 0; i--) {
					result.push(nums[i] * nums[i]);
				}
				break;
			}
		}
	}
	return result;
};
