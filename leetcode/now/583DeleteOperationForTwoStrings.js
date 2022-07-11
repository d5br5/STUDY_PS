/** 6910 4078
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
	let memo = Array.from({ length: word1.length + 1 }, () =>
		Array.from({ length: word2.length + 1 }, () => 0)
	);
	for (let i = word1.length - 1; i >= 0; i--) {
		for (let j = word2.length - 1; j >= 0; j--) {
			if (word1[i] === word2[j]) {
				memo[i][j] = memo[i + 1][j + 1] + 1;
			} else {
				memo[i][j] = Math.max(memo[i + 1][j], memo[i][j + 1]);
			}
		}
	}
	let len = memo[0][0];
	return word1.length + word2.length - 2 * len;
};
