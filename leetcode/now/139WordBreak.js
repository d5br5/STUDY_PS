/** 9331 8453
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	let status = Array.from({ length: s.length }, () => 0); // not 0 canstart 1 started 2
	let filtered = wordDict.filter((a) => s.startsWith(a));
	let lens = Array.from(new Set(filtered.map((a) => a.length)));

	if (lens.length === 0) return false;
	for (let i = 0; i < lens.length; i++) {
		status[lens[i]] = 1;
	}

	for (let i = 1; i < s.length; i++) {
		let stat = status[i];
		if (stat === 0 || stat === 2) continue;
		let str = s.slice(i);
		filtered = wordDict.filter((a) => str.startsWith(a));
		lens = Array.from(new Set(filtered.map((a) => a.length)));
		console.log(stat);
		if (lens.length > 0) status[i] = 2;
		for (let j = 0; j < lens.length; j++) {
			let next = i + lens[j];
			if (status[next] !== 2) status[i + lens[j]] = 1;
		}
		if (status[s.length] === 1) return true;
	}

	return status[s.length] === 1;
};
