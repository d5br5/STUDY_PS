/** 9947 57784
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
	let table = [
		".-",
		"-...",
		"-.-.",
		"-..",
		".",
		"..-.",
		"--.",
		"....",
		"..",
		".---",
		"-.-",
		".-..",
		"--",
		"-.",
		"---",
		".--.",
		"--.-",
		".-.",
		"...",
		"-",
		"..-",
		"...-",
		".--",
		"-..-",
		"-.--",
		"--..",
	];
	let codeA = "a".charCodeAt(0);
	let index = {};
	for (let i = 0; i < 26; i++) {
		index[String.fromCharCode(codeA + i)] = table[i];
	}
	return Array.from(
		new Set(
			words.map((a) =>
				a
					.split("")
					.map((b) => index[b])
					.join("")
			)
		)
	).length;
};
