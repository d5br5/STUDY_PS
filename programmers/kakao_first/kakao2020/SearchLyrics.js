// 16분

function solution(words, queries) {
	return queries.map((q) => matching(words, q));
}

function matching(words, query) {
	let count = 0;
	for (let j = 0; j < words.length; j++) {
		let done = true;
		if (words[j].length !== query.length) {
			continue;
		}
		for (let i = 0; i < words[j].length; i++) {
			if (query[i] === "?") {
				continue;
			} else if (query[i] !== words[j][i]) {
				done = false;
				break;
			}
		}
		if (done) count++;
	}
	return count;
}
