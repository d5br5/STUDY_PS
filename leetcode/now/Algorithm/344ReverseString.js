/** 7641 7148 best
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	let left = 0;
	let right = s.length - 1;
	let tmp = 0;
	while (left < right) {
		tmp = s[left];
		s[left] = s[right];
		s[right] = tmp;
		left++;
		right--;
	}
};

/** 4063 0500
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	let left = 0;
	let right = s.length - 1;
	helper(left, right);
	function helper(left, right) {
		if (left >= right) return;
		let tmp = s[left];
		s[left] = s[right];
		s[right] = tmp;
		helper(++left, --right);
	}
};
