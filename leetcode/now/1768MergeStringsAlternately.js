/** 5913 6908
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	let str = "";
	if (word1.length > word2.length) {
		for (let i = 0; i < word2.length; i++) {
			str += word1[i] + word2[i];
		}
		str += word1.slice(word2.length);
	} else {
		for (let i = 0; i < word1.length; i++) {
			str += word1[i] + word2[i];
		}
		str += word2.slice(word1.length);
	}
	return str;
};

/** 9656 3526
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
	let str = "";
	let short = word1.length > word2.length ? word2 : word1;
	let long = short === word2 ? word1 : word2;

	for (let i = 0; i < short.length; i++) {
		str += word1[i] + word2[i];
	}
	return str + long.slice(short.length);
};
