/** 5410 9847
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	let lastIdx = -1;
	for (let i = 0; i < s.length; i++) {
		let str = s[i];
		lastIdx = t.indexOf(str, lastIdx + 1);
		if (lastIdx === -1) return false;
	}
	return true;
};

/** 4566 8487
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	if (s.length === 0) return true;
	let left = 0;
	for (let i = 0; i < t.length; i++) {
		let str = t[i];
		if (str === s[left]) left++;
		if (left === s.length) return true;
	}
	return false;
};

/** 7340 0510
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	let dp = Array.from({ length: s.length + 1 }, () =>
		Array.from({ length: t.length + 1 }, () => 0)
	);
	for (let i = 1; i <= s.length; i++) {
		for (let j = 1; j <= t.length; j++) {
			if (s[i - 1] === t[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}
	return dp[s.length][t.length] === s.length;
};
