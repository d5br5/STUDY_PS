// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, C) {
	let count = 0;
	let sectionMax = 0;
	for (let i = 0; i < S.length - 1; i++) {
		if (S[i] === S[i + 1]) {
			count += C[i];
			if (sectionMax < C[i]) sectionMax = C[i];
		} else if (i > 0 && S[i - 1] === S[i]) {
			count += C[i];
			if (sectionMax < C[i]) sectionMax = C[i];
			count -= sectionMax;
		}
	}
	return count;
}
