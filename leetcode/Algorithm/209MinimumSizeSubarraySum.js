/** 9168 5649
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let max = 1000000;
	let min = max;
	let ok = false;
	let left = 0;
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (sum >= target) ok = true;
		while (sum >= target) sum -= nums[left++];
		if (ok) {
			let dist = i - left + 2;
			if (min > dist) min = dist;
			ok = false;
		}
	}

	return min === max ? 0 : min;
};

/** 6207 1018
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let max = 1000000;
	let min = max;
	let sum = Array.from({ length: nums.length + 1 }, (v, i) => 0);
	sum[1] = nums[0];
	for (let i = 2; i < sum.length; i++) {
		sum[i] = nums[i - 1] + sum[i - 1];
	}
	let left = 0;
	for (let i = 1; i < sum.length; i++) {
		if (sum[i] - sum[left] >= target) {
			while (sum[i] - sum[left] >= target) left++;
			min = Math.min(min, i - left + 1);
		}
	}
	return max === min ? 0 : min;
};

// 7213 8355
var minSubArrayLen = function (target, nums) {
	let max = 1000000;
	let min = max;
	let ok = false;
	let left = 0;
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (sum >= target) ok = true;
		while (sum >= target) sum -= nums[left++];
		if (ok) {
			min = Math.min(min, i - left + 2);
			ok = false;
		}
	}
	return min === max ? 0 : min;
};

// 6425 9826
var minSubArrayLen = function (target, nums) {
	let max = 1000000;
	let min = max;
	let left = 0;
	let sum = 0;

	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (sum >= target) ok = true;
		while (sum >= target) {
			sum -= nums[left++];
			min = Math.min(min, i - left + 2);
		}
	}
	return min === max ? 0 : min;
};
