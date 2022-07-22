/** 6684 1819
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	let index = {};
	for (let i = 0; i < s.length; i++) {
		if (index[s[i]]) {
			index[s[i]] += 1;
		} else {
			index[s[i]] = 1;
		}
	}
	let filtered = Object.values(index);
	let odd = filtered.filter((a) => a % 2 !== 0);
	let sum = 0;
	for (let elem of filtered) {
		sum += 2 * Math.floor(elem / 2);
	}
	return odd.length > 0 ? sum + 1 : sum;
};
