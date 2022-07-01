/** 1652 7043
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
	let count = 0;
	let now;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < k) {
			now = 1;
			for (let j = i; j < nums.length; j++) {
				now *= nums[j];
				if (now < k) {
					count++;
				} else {
					break;
				}
			}
		}
	}
	return count;
};

/** 5022 7043
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
	if (k <= 1) return 0;
	let left = 0;
	let count = 0;
	let prod = 1;
	for (let i = 0; i < nums.length; i++) {
		prod *= nums[i];
		while (prod >= k) prod /= nums[left++];
		count += i - left + 1;
	}
	return count;
};
