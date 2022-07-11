/** 2386 3338
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	let memo = Array.from({ length: text1.length }, () =>
		Array.from({ length: text2.length }, () => -1)
	);

	return solve(0, 0);

	function solve(p1, p2) {
		if (p1 === text1.length) return 0;
		if (p2 === text2.length) return 0;
		if (memo[p1][p2] !== -1) return memo[p1][p2];

		// p1 excluded
		let option1 = solve(p1 + 1, p2);

		// p1 included
		let option2 = 0;
		let firstPoint = text2.slice(p2).indexOf(text1[p1]);
		if (firstPoint !== -1) option2 = 1 + solve(p1 + 1, firstPoint + 1 + p2);

		memo[p1][p2] = Math.max(option1, option2);
		return memo[p1][p2];
	}
};

/** 1528 5972
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	let memo = Array.from({ length: text1.length }, () =>
		Array.from({ length: text2.length }, () => -1)
	);

	return solve(0, 0);

	function solve(p1, p2) {
		if (p1 === text1.length) return 0;
		if (p2 === text2.length) return 0;
		if (memo[p1][p2] !== -1) return memo[p1][p2];

		let answer = 0;
		if (text1[p1] === text2[p2]) {
			answer = 1 + solve(p1 + 1, p2 + 1);
		} else {
			answer = Math.max(solve(p1, p2 + 1), solve(p1 + 1, p2));
		}

		memo[p1][p2] = answer;
		return answer;
	}
};

/** 2989 7996
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	let memo = Array.from({ length: text1.length + 1 }, () =>
		Array.from({ length: text2.length + 1 }, () => 0)
	);

	for (let i = text1.length - 1; i >= 0; i--) {
		for (let j = text2.length - 1; j >= 0; j--) {
			if (text1[i] === text2[j]) {
				memo[i][j] = memo[i + 1][j + 1] + 1;
			} else {
				memo[i][j] = Math.max(memo[i + 1][j], memo[i][j + 1]);
			}
		}
	}
	return memo[0][0];
};
