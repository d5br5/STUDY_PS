/** 7273 6914
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
	let index = {};
	for (let a of arr) {
		if (index[a]) {
			index[a] += 1;
		} else {
			index[a] = 1;
		}
	}
	let occur = Object.values(index);
	return occur.length === Array.from(new Set(occur)).length;
};
