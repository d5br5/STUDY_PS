/** 7853 7723
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let result = "";
	for (let i = 0; i < s.length; i++) {
		check1(i);
	}

	for (let i = 0; i < s.length - 1; i++) {
		if (s[i] === s[i + 1]) check2(i);
	}

	function check1(i) {
		let iter = Math.min(i, s.length - 1 - i);
		let answer = 0;
		let didbreak = false;
		for (let j = 0; j < iter; j++) {
			if (s[i - 1 - j] !== s[i + 1 + j]) break;
			answer = j + 1;
		}
		if (result.length < answer * 2 + 1) {
			result = s.slice(i - answer, i + answer + 1);
		}
	}

	function check2(i) {
		let iter = Math.min(i, s.length - 2 - i);
		let answer = 0;
		for (let j = 0; j < iter; j++) {
			if (s[i - 1 - j] !== s[i + 2 + j]) break;
			answer = j + 1;
		}
		if (result.length < 2 * (answer + 1)) {
			result = s.slice(i - answer, i + answer + 2);
		}
	}

	return result;
};

/** 8665 6221
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let result = "";
	for (let i = 0; i < s.length; i++) {
		check(i, 0);
		if (i < s.length - 1 && s[i] === s[i + 1]) check(i, 1);
	}

	function check(i, gap) {
		let iter = Math.min(i, s.length - 1 - i - gap);
		let answer = 0;
		for (let j = 0; j < iter; j++) {
			if (s[i - 1 - j] !== s[i + 1 + j + gap]) break;
			answer = j + 1;
		}
		if (result.length < answer * 2 + 1 + gap) {
			result = s.slice(i - answer, i + answer + 1 + gap);
		}
	}

	return result;
};

// 참고 : manacher

/** 0910 1022
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let result = "";
	let table = Array.from({ length: s.length }, () => Array.from({ length: s.length }, () => false));

	for (let i = 1; i <= s.length; i++) {
		for (let j = 0; j <= s.length - i; j++) {
			table[j][j + i - 1] =
				i === 1
					? true
					: i === 2 && s[j] === s[j + 1]
					? true
					: table[j + 1][j + i - 2] && s[j] === s[j + i - 1];
			if (table[j][j + i - 1] && result.length < i) result = s.slice(j, j + i);
		}
	}

	return result;
};
