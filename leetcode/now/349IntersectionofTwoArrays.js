/** 9614 6320
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
	let n1 = Array.from(new Set(nums1));
	let n2 = Array.from(new Set(nums2));
	let arr = [];
	let a1 = n1.length > n2.length ? n2 : n1;
	let a2 = a1 == n2 ? n1 : n2;
	for (let a of a1) {
		if (a2.includes(a)) arr.push(a);
	}
	return arr;
};
