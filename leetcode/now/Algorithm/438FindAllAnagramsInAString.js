/** time exceed 34/61
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	let index = {};
	for (let i = 0; i < p.length; i++) {
		if (index[p[i]]) {
			index[p[i]]++;
		} else {
			index[p[i]] = 1;
		}
	}
	let result = [];
	function isAna(a) {
		let origin = { ...index };
		for (let i = 0; i < a.length; i++) {
			if (origin[a[i]] && origin[a[i]] > 0) {
				origin[a[i]]--;
			} else {
				return false;
			}
		}
		let final = Object.values(origin);
		for (let i = 0; i < final.length; i++) {
			if (final[i] !== 0) return false;
		}
		return true;
	}
	for (let i = 0; i <= s.length - p.length; i++) {
		if (isAna(s.slice(i, i + p.length))) result.push(i);
	}
	return result;
};

/** 1551 1839
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	if (p.length > s.length) return [];
	let index = {};
	for (let i = 0; i < p.length; i++) {
		if (index[p[i]]) {
			index[p[i]]++;
		} else {
			index[p[i]] = 1;
		}
	}
	let result = [];
	for (let i = 0; i < p.length; i++) {
		if (index[s[i]]) {
			index[s[i]]--;
		} else {
			index[s[i]] = -1;
		}
	}
	if (Object.values(index).filter((a) => a !== 0).length === 0) result.push(0);
	for (let i = 0; i < s.length - p.length; i++) {
		if (index[s[i]]) {
			index[s[i]]++;
		} else {
			index[s[i]] = 1;
		}
		if (index[s[i + p.length]]) {
			index[s[i + p.length]]--;
		} else {
			index[s[i + p.length]] = -1;
		}
		if (Object.values(index).filter((a) => a !== 0).length === 0) result.push(i + 1);
	}
	return result;
};

/** 1919 4332
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	if (p.length > s.length) return [];
	let item = [
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
		"g",
		"h",
		"i",
		"j",
		"k",
		"l",
		"m",
		"n",
		"o",
		"p",
		"q",
		"r",
		"s",
		"t",
		"u",
		"v",
		"w",
		"x",
		"y",
		"z",
	];
	let index = {};
	item.forEach((a) => (index[a] = 0));
	for (let i = 0; i < p.length; i++) {
		index[p[i]]++;
	}
	let result = [];
	for (let i = 0; i < p.length; i++) {
		index[s[i]]--;
	}
	if (Object.values(index).filter((a) => a !== 0).length === 0) result.push(0);
	for (let i = 0; i < s.length - p.length; i++) {
		index[s[i]]++;
		index[s[i + p.length]]--;
		if (Object.values(index).filter((a) => a !== 0).length === 0) result.push(i + 1);
	}
	return result;
};

/** 3839 4108
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	if (p.length > s.length) return [];
	let index = Array.from({ length: 26 }, (a, b) => 0);
	let result = [];
	for (let i = 0; i < p.length; i++) index[p.charCodeAt(i) - "a".charCodeAt(0)]++;
	for (let i = 0; i < p.length; i++) index[s.charCodeAt(i) - "a".charCodeAt(0)]--;
	if (index.filter((a) => a !== 0).length === 0) result.push(0);
	for (let i = 0; i < s.length - p.length; i++) {
		index[s.charCodeAt(i) - "a".charCodeAt(0)]++;
		index[s.charCodeAt(i + p.length) - "a".charCodeAt(0)]--;
		if (index.filter((a) => a !== 0).length === 0) result.push(i + 1);
	}
	return result;
};
