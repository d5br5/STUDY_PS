/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	let reversed = nums.reverse();
	let left = reversed.slice(0, k);
	let right = reversed.slice(k);
	left = left.reverse();
	right = right.reverse();
	nums = [...left, ...right];
};
