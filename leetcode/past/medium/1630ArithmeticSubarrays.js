/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
	let answer = [];
	for (let i = 0; i < l.length; i++) {
		let subarr = nums.slice(l[i], r[i] + 1);
		let sorted = subarr.sort((a, b) => a - b);
		let result = true;
		for (let j = 0; j < sorted.length - 2; j++) {
			if (sorted[j] - sorted[j + 1] !== sorted[j + 1] - sorted[j + 2]) {
				result = false;
				break;
			}
		}
		answer.push(result);
	}
	return answer;
};
