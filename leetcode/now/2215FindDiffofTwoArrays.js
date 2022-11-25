/** 8831 6558
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
	let n1 = Array.from(new Set(nums1));
	let n2 = Array.from(new Set(nums2));
	return [n1.filter((a) => !n2.includes(a)), n2.filter((a) => !n1.includes(a))];
};
