/** 6138 5804
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
	for (let i = 0; i < words.length - 1; i++) {
		let [one, two] = [words[i], words[i + 1]];
		if (one.length < two.length) {
			for (let j = 0; j < one.length; j++) {
				let [i1, i2] = [order.indexOf(one[j]), order.indexOf(two[j])];
				if (i1 > i2) {
					return false;
				} else if (i1 < i2) {
					break;
				}
			}
		} else if (one.length > two.length) {
			let isBreak = false;
			for (let j = 0; j < two.length; j++) {
				let [i1, i2] = [order.indexOf(one[j]), order.indexOf(two[j])];
				if (i1 > i2) {
					return false;
				} else if (i1 < i2) {
					isBreak = true;
					break;
				}
			}
			if (!isBreak) return false;
		} else {
			for (let j = 0; j < one.length; j++) {
				let [i1, i2] = [order.indexOf(one[j]), order.indexOf(two[j])];
				if (i1 > i2) {
					return false;
				} else if (i1 < i2) {
					break;
				}
			}
		}
	}
	return true;
};
