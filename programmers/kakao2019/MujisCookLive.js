// 1h 30m

function solution(food_times, k) {
	let app = [];
	for (let i = 0; i < food_times.length; i++) {
		app.push([i, food_times[i]]);
	}
	let min = 100000000;
	let cutted;

	while (k > 0) {
		for (let i = 0; i < app.length; i++) {
			if (app[i][1] < min) min = app[i][1];
		}

		if (k < min * app.length) {
			// clean
			return app[((k - 1) % app.length) + 1][0] + 1;
		} else if (k === min * app.length) {
			k -= min * app.length;
			cutted = app.map((a) => [a[0], a[1] - min]);
			app = cutted.filter((a) => a[1] !== 0);
			if (app[0]) {
				return app[0][0] + 1;
			} else {
				return -1;
			}
		} else {
			// cutting
			k -= min * app.length;
			cutted = app.map((a) => [a[0], a[1] - min]);
			app = cutted.filter((a) => a[1] !== 0);
		}
	}
}

function solution2(food_times, k) {
	let app = [];
	for (let i = 0; i < food_times.length; i++) {
		app.push([i, food_times[i]]);
	}
	app.sort((a, b) => a[1] - b[1]);

	let totalTime = 0;
	for (let i = 0; i < app.length; i++) {
		let remain_len = app.length - i;
		if (remain_len * app[i][1] + totalTime <= k) {
			totalTime += app[i][1];
			if (i === app.length - 1) {
				return -1;
			}
		} else {
			app = app.slice(i);
			break;
		}
	}
	let left = k - totalTime;
	app.sort((a, b) => a[0] - b[0]);

	if (app.length === 1) return app[0][0] + 1;
	return app[left % app.length][0] + 1;
}
