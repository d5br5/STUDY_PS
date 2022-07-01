/**
 * @param {string} s
 * @return {string[]}
 */

// 9910 6214

var letterCasePermutation = function (s) {
	let parsed = s.split("");
	let result = [""];
	for (let i = 0; i < parsed.length; i++) {
		let now = parsed[i];
		if (isNaN(now)) {
			result = [...result, ...result];
			for (let i = 0; i < result.length / 2; i++) {
				result[i] += now.toLowerCase();
				result[i + result.length / 2] += now.toUpperCase();
			}
		} else {
			result = result.map((a) => a + now);
		}
	}
	return result;
};
