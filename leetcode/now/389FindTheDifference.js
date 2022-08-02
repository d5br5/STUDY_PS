/** 9863 8483
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	let sIndex = Array.from({ length: 26 }, () => 0);
	let tIndex = Array.from({ length: 26 }, () => 0);

	for (let i = 0; i < s.length; i++) {
		sIndex[s.charCodeAt(i) - "a".charCodeAt(0)]++;
	}

	for (let i = 0; i < t.length; i++) {
		tIndex[t.charCodeAt(i) - "a".charCodeAt(0)]++;
	}

	for (let i = 0; i < 26; i++) {
		if (sIndex[i] !== tIndex[i]) return String.fromCharCode("a".charCodeAt(0) + i);
	}
};

/** 6376 9136
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	let char = 0;
	for (let i = 0; i < s.length; i++) {
		char ^= s.charCodeAt(i);
	}
	for (let i = 0; i < t.length; i++) {
		char ^= t.charCodeAt(i);
	}
	return String.fromCharCode(char);
};
