function solution(periods, payments, estimates) {
	let okNow = [];
	let notNow = [];

	for (let i = 0; i < periods.length; i++) {
		if (periods[i] < 24) {
			okNow.push(false);
		} else {
			let sum = 0;
			for (let j = 0; j < 12; j++) {
				sum += payments[i][j];
			}
			if (periods[i] < 60) {
				if (sum >= 900000) {
					okNow.push(true);
				} else {
					okNow.push(false);
				}
			} else {
				if (sum >= 600000) {
					okNow.push(true);
				} else {
					okNow.push(false);
				}
			}
		}

		if (periods[i] < 23) {
			notNow.push(false);
		} else {
			let sum = 0;
			for (let j = 0; j < 11; j++) {
				sum += payments[i][11 - j];
			}
			sum += estimates[i];
			if (periods[i] < 59) {
				if (sum >= 900000) {
					notNow.push(true);
				} else {
					notNow.push(false);
				}
			} else {
				if (sum >= 600000) {
					notNow.push(true);
				} else {
					notNow.push(false);
				}
			}
		}
	}
	console.log;

	let result = [0, 0];
	for (let i = 0; i < periods.length; i++) {
		if (okNow[i] && !notNow[i]) result[1]++;
		if (!okNow[i] && notNow[i]) result[0]++;
	}
	return result;
}
