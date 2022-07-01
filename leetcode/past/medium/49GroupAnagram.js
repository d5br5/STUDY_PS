/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let result = [];
	let matched = false;

	for (let i = 0; i < strs.length; i++) {
		for (let j = 0; j < result.length; j++) {
			if (isSame(strs[i], result[j][0])) {
				result[j].push(strs[i]);
				matched = true;
				break;
			}
		}
		if (matched) {
			matched = false;
			continue;
		} else {
			result.push([strs[i]]);
		}
	}

	return result;
};

let isSame = function (a, b) {
	if (a.length !== b.length) return false;
	let sortedA = a.split("").sort();
	let sortedB = b.split("").sort();
	for (let i = 0; i < sortedA.length; i++) {
		if (sortedA[i] !== sortedB[i]) return false;
	}

	return true;
};
