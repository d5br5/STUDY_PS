/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	let left = 0;
	let right = 0;
	let result = "";
	for (let i = 0; i < s.length; i++) {
		if (s[i] === " ") {
			right = i;
			let now = s.slice(left, right).split("").reverse().join("");
			result += now + " ";
			left = i + 1;
		}
		if (i === s.length - 1) {
			let now = s.slice(left).split("").reverse().join("");
			result += now;
		}
	}
	return result;
};
