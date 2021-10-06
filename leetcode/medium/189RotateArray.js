/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
	k = k % nums.length;
	nums.reverse();
	let left = nums.splice(0, k).reverse();
	nums.reverse();
	nums.unshift(...left);
};
