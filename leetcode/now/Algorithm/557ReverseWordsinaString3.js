/** 1104 8049
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	return s
		.split(" ")
		.map((a) => a.split("").reverse().join(""))
		.join(" ");
};
