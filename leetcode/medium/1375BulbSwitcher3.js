/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function (light) {
	let count = 0;
	let bluecount = 0;
	let oncount = 0;
	let blue = Array.from({length: light.length + 1}, (a, b) => false);
	let on = Array.from({length: light.length + 1}, (a, b) => false);
	blue[0] = true;
	on[0] = true;

	for (let i = 0; i < light.length; i++) {
		let now = light[i];
		on[now] = true;
		oncount++;
		if (blue[now - 1]) {
			blue[now] = true;
			bluecount++;
			let next = now + 1;
			while (on[next]) {
				blue[next] = true;
				bluecount++;
				next += 1;
			}
		}
		if (oncount === bluecount) count++;
	}
	return count;
};
