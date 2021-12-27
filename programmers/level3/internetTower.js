function solution(n, stations, w) {
	let last = -1;
	let result = [];

	for (let i = 0; i < stations.length; i++) {
		let startpoint = 0;
		let lastpoint = stations[i] - 1 + w < n ? stations[i] - 1 + w : n - 1;
		if (last < stations[i] - 1 - w) {
			startpoint = stations[i] - 1 - w;
			result.push(startpoint - last - 1);
		} else {
			startpoint = last + 1;
		}
		last = lastpoint;
	}
	if (last < n - 1) result.push(n - 1 - last);
	return result
		.map((a) => Math.ceil(a / (2 * w + 1)))
		.reduce((prev, next) => prev + next);
}

function solution2(n, stations, w) {
	let last = -1;
	let result = [];
	for (let i = 0; i < stations.length; i++) {
		let lastpoint = stations[i] - 1 + w < n ? stations[i] - 1 + w : n - 1;
		if (last < stations[i] - 1 - w) result.push(stations[i] - 1 - w - last - 1);
		last = lastpoint;
	}
	if (last < n - 1) result.push(n - 1 - last);
	return result
		.map((a) => Math.ceil(a / (2 * w + 1)))
		.reduce((prev, next) => prev + next);
}

function solution3(n, stations, w) {
	let last = -1;
	let result = 0;
	for (let i = 0; i < stations.length; i++) {
		let lastpoint = stations[i] - 1 + w < n ? stations[i] - 1 + w : n - 1;
		if (last < stations[i] - 1 - w)
			result += Math.ceil((stations[i] - 1 - w - last - 1) / (2 * w + 1));
		last = lastpoint;
	}
	if (last < n - 1) result += Math.ceil((n - 1 - last) / (2 * w + 1));
	return result;
}
