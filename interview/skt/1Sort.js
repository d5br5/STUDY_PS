function solution(p) {
	let result = Array.from({ length: p.length }, (v, i) => 0);

	for (let i = 0; i < p.length - 1; i++) {
		let min = 10000;
		let minIdx = 0;
		for (let j = i; j < p.length; j++) {
			if (min > p[j]) {
				min = p[j];
				minIdx = j;
			}
		}
		if (minIdx !== i) {
			result[i]++;
			result[minIdx]++;
			let tmp = p[i];
			p[i] = p[minIdx];
			p[minIdx] = tmp;
		}
	}

	return result;
}
