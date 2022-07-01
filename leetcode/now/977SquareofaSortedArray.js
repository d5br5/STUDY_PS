/** 6480 7656
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	let answer = [];
	let point = 0;
	for (let i = 0; i < nums.length; i++) {
		point = i;
		if (nums[i] >= 0) {
			break;
		}
	}
	let i = point;
	let j = point - 1;

	while (i < nums.length && j >= 0) {
		if (nums[i] + nums[j] >= 0) {
			answer.push(nums[j--] ** 2);
		} else {
			answer.push(nums[i++] ** 2);
		}
	}

	while (i < nums.length) {
		answer.push(nums[i++] ** 2);
	}
	while (j >= 0) {
		answer.push(nums[j--] ** 2);
	}

	return answer;
};

/** 2216 9890
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
	let answer = Array.from({ length: nums.length }, (v, i) => 0);
	let left = 0;
	let right = nums.length - 1;

	for (let i = nums.length - 1; i >= 0; i--) {
		if (nums[left] + nums[right] >= 0) {
			answer[i] = nums[right--] ** 2;
		} else {
			answer[i] = nums[left++] ** 2;
		}
	}
	return answer;
};
