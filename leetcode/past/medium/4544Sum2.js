/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
	let count = 0;
	for (let a = 0; a < nums1.length; a++) {
		for (let b = 0; b < nums2.length; b++) {
			for (let c = 0; c < nums3.length; c++) {
				for (let d = 0; d < nums4.length; d++) {
					if (nums1[a] + nums2[b] + nums3[c] + nums4[d] === 0) count++;
				}
			}
		}
	}
	return count;
};
