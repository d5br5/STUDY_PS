/** 8707 5659
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	if (digits.length === 0) return [];

	let dix = {
		2: ["a", "b", "c"],
		3: ["d", "e", "f"],
		4: ["g", "h", "i"],
		5: ["j", "k", "l"],
		6: ["m", "n", "o"],
		7: ["p", "q", "r", "s"],
		8: ["t", "u", "v"],
		9: ["w", "x", "y", "z"],
	};

	let result = [];

	for (let i = 0; i < digits.length; i++) {
		for (let j = 0; j < dix[digits[i]].length; j++) {
			DFS(i, dix[digits[i]][j]);
		}
	}

	function DFS(digit, str) {
		if (str.length === digits.length) {
			result.push(str);
			return;
		}

		for (let i = digit + 1; i < digits.length; i++) {
			for (let j = 0; j < dix[digits[i]].length; j++) {
				DFS(i, str + dix[digits[i]][j]);
			}
		}
	}

	return result;
};
