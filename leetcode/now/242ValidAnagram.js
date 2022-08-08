/** 3200 7147
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	if (s.length !== t.length) return false;
	let indexS = {};
	let indexT = {};
	for (let i = 0; i < s.length; i++) {
		if (indexS[s[i]]) {
			indexS[s[i]]++;
		} else {
			indexS[s[i]] = 1;
		}

		if (indexT[t[i]]) {
			indexT[t[i]]++;
		} else {
			indexT[t[i]] = 1;
		}
	}

	for (let key of Object.keys(indexS)) {
		if (!indexT[key]) return false;
		if (indexS[key] !== indexT[key]) return false;
	}
	return true;
};
