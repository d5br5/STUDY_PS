/**
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
	let converted = [];
	let mode = 0;
	let modecount = 0;
	for (let i = 0; i < count.length; i++) {
		if (count[i] !== 0) {
			converted.push([i, count[i]]);
			if (count[i] > modecount) {
				modecount = count[i];
				mode = i;
			}
		}
	}

	let totalcount = 0;
	let totalsum = 0;

	for (let i = 0; i < converted.length; i++) {
		totalcount += converted[i][1];
		totalsum += converted[i][0] * converted[i][1];
	}

	let median = 0;

	if (totalcount % 2 === 0) {
		let one = totalcount / 2;
		let two = one + 1;
		let now = 0;
		for (let i = 0; i < converted.length; i++) {
			now += converted[i][1];
			if (now === one) {
				median = (converted[i][0] + converted[i + 1][0]) / 2;
				break;
			}
			if (now >= two) {
				median = converted[i][0];
				break;
			}
		}
	} else {
		let pointer = parseInt(totalcount / 2) + 1;
		let now = 0;
		for (let i = 0; i < converted.length; i++) {
			now += converted[i][1];
			if (now >= pointer) {
				median = converted[i][0];
				break;
			}
		}
	}

	let mean = totalsum / totalcount;
	let minimum = converted[0][0];
	let maximum = converted[converted.length - 1][0];

	return [minimum, maximum, mean, median, mode];
};
