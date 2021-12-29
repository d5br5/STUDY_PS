/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permute = function (nums) {
	let result = [];
	maker([], nums, nums.length);
	return result;
	function maker(arr, origin, count) {
		if (count === 0) {
			return result.push(arr);
		}
		let filtered = origin.filter((a) => !arr.includes(a));
		for (let i = 0; i < filtered.length; i++) {
			maker([...arr, filtered[i]], filtered, count - 1);
		}
	}
};
