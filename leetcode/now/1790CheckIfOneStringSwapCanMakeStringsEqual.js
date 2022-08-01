/** 7980 9722
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
	let index = [];
	for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) index.push(i);
	}
	if (index.length === 0) return true;
	if (index.length !== 2) return false;
	if (s1[index[0]] === s2[index[1]] && s1[index[1]] === s2[index[0]]) return true;
	return false;
};
