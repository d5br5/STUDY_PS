/** 7216 8466
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	return nums1.map((a) => {
		let start = nums2.indexOf(a);
		for (let i = start + 1; i < nums2.length; i++) {
			if (nums2[i] > a) return nums2[i];
		}
		return -1;
	});
};

/** 5517 3871
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	let index = new Map();
	let stack = [nums2[0]];

	for (let i = 1; i < nums2.length; i++) {
		let now = nums2[i];
		if (stack[stack.length - 1] < now) {
			while (stack[stack.length - 1] < now) {
				index.set(stack.pop(), now);
			}
		}
		stack.push(now);
	}
	while (stack.length > 0) index.set(stack.pop(), -1);

	return nums1.map((a) => index.get(a));
};
