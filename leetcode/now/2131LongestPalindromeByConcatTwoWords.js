/** 9920 8847
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function (words) {
	let pair = {};
	let twin = {};
	let result = 0;

	for (let word of words) {
		if (word[0] === word[1]) {
			if (twin[word]) {
				twin[word]++;
			} else {
				twin[word] = 1;
			}
		} else {
			if (pair[word]) {
				pair[word]++;
			} else {
				pair[word] = 1;
			}
		}
	}

	let keys = Object.keys(pair);
	while (keys.length > 0) {
		let key = keys[0];
		let rev = `${key[1]}${key[0]}`;
		if (keys.indexOf(rev) === -1) {
			keys.shift();
			continue;
		}
		result += 4 * Math.min(pair[key], pair[rev]);
		keys.splice(keys.indexOf(rev), 1);
		keys.shift();
	}

	let oddExists = false;

	for (let key of Object.keys(twin)) {
		if (twin[key] % 2 === 1) oddExists = true;
		result += parseInt(twin[key] / 2) * 4;
	}

	return oddExists ? result + 2 : result;
};
