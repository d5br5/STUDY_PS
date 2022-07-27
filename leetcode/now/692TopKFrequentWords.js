/** 8871 2272
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
	let hash = {};
	for (let word of words) {
		if (hash[word]) {
			hash[word]++;
		} else {
			hash[word] = 1;
		}
	}
	return Object.keys(hash)
		.map((a) => [a, hash[a]])
		.sort((a, b) => (a[1] !== b[1] ? b[1] - a[1] : a[0].localeCompare(b[0])))
		.slice(0, k)
		.map((a) => a[0]);
};
