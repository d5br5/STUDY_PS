/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	if (s.length === 0) return 0;
	let max = 0;
	let left = 0;
	let right = 0;
	let reps = [];
	while (left < s.length) {
		right = left;
		while (!reps.includes(s[right])) {
			reps.push(s[right]);
			right++;
			if (right >= s.length) break;
		}
		if (max < right - left) {
			max = right - left;
		}
		while (s[left] !== s[right]) {
			left++;
		}
		left++;
		reps = [];
	}
	return max;
};
