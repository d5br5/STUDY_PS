/** 3786 5812
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (strs.length === 1) return strs[0];
	let prefix = strs[0];
	for (let i = 1; i < strs.length; i++) {
		let now = strs[i];
		let didBreak = false;
		for (let j = 0; j < Math.min(now.length, prefix.length); j++) {
			if (now[j] !== prefix[j]) {
				prefix = prefix.slice(0, j);
				didBreak = true;
				break;
			}
		}
		if (didBreak) {
			if (prefix.length === 0) return "";
		} else {
			prefix = prefix.slice(0, Math.min(now.length, prefix.length));
		}
	}
	return prefix;
};

/** 2851 7803
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (strs.length === 1) return strs[0];
	let prefix = strs[0];

	for (let i = 1; i < strs.length; i++) {
		let now = strs[i];
		for (let j = 0; j < Math.min(now.length, prefix.length); j++) {
			if (now[j] !== prefix[j]) {
				prefix = prefix.slice(0, j);
				break;
			}
		}
		prefix = prefix.slice(0, Math.min(now.length, prefix.length));
		if (prefix.length === 0) return "";
	}
	return prefix;
};

/** 8699 8383
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
	if (strs.length === 1) return strs[0];
	let prefix = strs[0];

	for (let i = 1; i < strs.length; i++) {
		let now = strs[i];
		let point = Math.min(now.length, prefix.length);
		prefix = prefix.slice(0, point);
		for (let j = 0; j < point; j++) {
			if (now[j] !== prefix[j]) {
				prefix = prefix.slice(0, j);
				break;
			}
		}
		if (prefix.length === 0) return "";
	}
	return prefix;
};
