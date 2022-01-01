/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	let arr = {};
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		if (arr[nums[i]]) {
			arr[nums[i]]++;
		} else {
			arr[nums[i]] = 1;
		}
	}
	let arr2 = Object.keys(arr).map((a) => [a, arr[a]]);
	arr2.sort((a, b) => b[1] - a[1]);
	for (let i = 0; i < k; i++) {
		result.push(arr2[i][0]);
	}

	return result;
};
