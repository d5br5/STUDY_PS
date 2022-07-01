/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let result = [];

	DFS(1, 0, "(");

	function DFS(left, right, str) {
		if (left === n && right === n) {
			result.push(str);
			return;
		}
		if (left < n) DFS(left + 1, right, str + "(");
		if (right < left) DFS(left, right + 1, str + ")");
	}

	return result;
};

/** 8574 2069
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	let result = [];
	if (n === 0) {
		result.push("");
	} else {
		for (let i = 0; i < n; i++) {
			for (let left of generateParenthesis(i)) {
				for (let right of generateParenthesis(n - 1 - i)) {
					result.push("(" + left + ")" + right);
				}
			}
		}
	}
	return result;
};
