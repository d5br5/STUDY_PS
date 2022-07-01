/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	let result = [];
	DFS([], 0);
	return result;

	function DFS(arr, count) {
		if (count === nums.length) return result.push(arr);
		DFS([...arr, nums[count]], count + 1);
		DFS([...arr], count + 1);
	}
};
