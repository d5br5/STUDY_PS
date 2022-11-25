/** 6584 8199
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
	let stack = [];
	let start = 0;
	let result = "";
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			if (stack.length === 0) start = i;
			stack.push("(");
		} else {
			stack.pop();
			if (stack.length === 0) {
				result += s.slice(start + 1, i);
			}
		}
	}
	return result;
};

/** 8696 9970
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
	let stack = [];
	let start = 0;
	let count = 0;
	let result = "";
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "(") {
			if (count === 0) start = i;
			count++;
		} else {
			count--;
			if (count === 0) {
				result += s.slice(start + 1, i);
			}
		}
	}
	return result;
};
