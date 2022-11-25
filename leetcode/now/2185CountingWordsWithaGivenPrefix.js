/** 9698 9395
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
	return words.filter((a) => a.startsWith(pref)).length;
};
