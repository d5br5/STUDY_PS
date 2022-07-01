/** 6269 7466
 * O(N^2) O(N)
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	let arr = Array.from({ length: nums.length }, () => 1);

	for (let i = 1; i < nums.length; i++) {
		let before = i - 1;
		let max = 0;
		while (before >= 0) {
			if (nums[before] < nums[i] && max < arr[before]) max = arr[before];
			before--;
		}

		arr[i] = max + 1;
	}
	return Math.max(...arr);
};

/** 8951 9955
 * O(N^2) O(N)
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	let arr = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		let now = nums[i];
		if (now > arr[arr.length - 1]) {
			arr.push(now);
		} else {
			let before = arr.length - 1;
			while (before >= 0 && arr[before] >= now) {
				before--;
			}
			if (before < arr.length - 1) arr[before + 1] = now;
		}
	}
	return arr.length;
};

/** Improve with Binary Search
 * 8170 3090
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
	let arr = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		let now = nums[i];
		if (now > arr[arr.length - 1]) {
			arr.push(now);
		} else {
			let left = 0,
				right = arr.length - 1;
			let mid;
			while (left < right) {
				mid = parseInt((left + right) / 2);
				if (arr[mid] < now) {
					left = mid + 1;
				} else {
					right = mid;
				}
			}
			arr[left] = now;
		}
	}
	return arr.length;
};
