function solution(routes) {
	let sorted = routes.sort((a, b) => a[1] - b[1]);
	let count = 0;
	while (sorted.length > 0) {
		let first = sorted[0][1];
		sorted = sorted.filter((a) => a[0] > first);
		count++;
	}
	return count;
}
