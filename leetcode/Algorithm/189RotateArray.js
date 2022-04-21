/** 3909 7050
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	const len = nums.length;
	const result = Array.from({ length: len }, (v, i) => 0);
	for (let i = 0; i < len; i++) {
		result[(i + k) % len] = nums[i];
	}
	for (let i = 0; i < len; i++) {
		nums[i] = result[i];
	}
};

/** 8087 8080 best
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	const dup = [...nums];
	const len = nums.length;
	k %= len;
	for (let i = 0; i < len; i++) {
		nums[(i + k) % len] = dup[i];
	}
};

/** 1969 4292
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	const len = nums.length;
	k %= len;
	let count = 0;

	for (let i = 0; count < len; i++) {
		let current = i;
		let prevValue = nums[i];
		do {
			let next = (current + k) % len;
			let tmp = nums[next];
			nums[next] = prevValue;
			prevValue = tmp;
			current = next;
			count++;
		} while (current != i);
	}
};

/** 6760 2117
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	k %= nums.length;
	reverse(0, nums.length - 1);
	reverse(0, k - 1);
	reverse(k, nums.length - 1);

	function reverse(start, end) {
		while (start < end) {
			let tmp = nums[start];
			nums[start] = nums[end];
			nums[end] = tmp;
			start++;
			end--;
		}
	}
};
