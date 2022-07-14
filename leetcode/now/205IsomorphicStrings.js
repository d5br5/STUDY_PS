/** 6765 8422
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
	let Sindex = {};
	let Tindex = {};
	for (let i = 0; i < s.length; i++) {
		let sstr = s[i];
		let tstr = t[i];
		if (Tindex[tstr]) {
			if (Tindex[tstr] !== sstr) return false;
		} else {
			Tindex[tstr] = sstr;
		}

		if (Sindex[sstr]) {
			if (Sindex[sstr] !== tstr) return false;
		} else {
			Sindex[sstr] = tstr;
		}
	}
	return true;
};
