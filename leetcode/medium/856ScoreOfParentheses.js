/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
	if (s == "()") return 1;
	let stack = 0;
	let point = 0;
	for (let i = 0; i < s.length; i++) {
		point = i;
		if (s[i] === "(") stack++;
		if (s[i] === ")") stack--;
		if (stack === 0) break;
	}

	if (point === s.length - 1) {
		if (s[1] === ")") return 1 + scoreOfParentheses(s.slice(2));
		if (s[1] === "(") return 2 * scoreOfParentheses(s.slice(1, s.length - 1));
	} else {
		return (
			scoreOfParentheses(s.slice(0, point + 1)) +
			scoreOfParentheses(s.slice(point + 1))
		);
	}
};
