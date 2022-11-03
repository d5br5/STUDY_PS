function solution(fees, records) {
	let total = {};
	const OUT = "OUT";
	const IN = "IN";
	const LAST_TIME = "23:59";

	for (let i = 0; i < records.length; i++) {
		let [time, carnum, state] = records[i].split(" ");
		if (state === IN) {
			if (total[carnum]) {
				// 예전 기록 있는 차 입차
				total[carnum] = {...total[carnum], state, intime: time2min(time)};
			} else {
				// 첫 입차
				total[carnum] = {carnum, state, intime: time2min(time), acctime: 0};
			}
		} else {
			// 차 출고
			let pasttime = total[carnum].acctime;
			let thistime = time2min(time) - total[carnum].intime;
			total[carnum] = {...total[carnum], state, acctime: pasttime + thistime};
		}
	}

	let values = Object.values(total);
	let concent = values.map((a) => [
		parseInt(a.carnum),
		a.state,
		a.intime,
		a.acctime,
	]);

	for (let i = 0; i < concent.length; i++) {
		if (concent[i][1] === OUT) continue;
		concent[i][3] += time2min(LAST_TIME) - concent[i][2];
		concent[i][1] = OUT;
	}

	return concent.sort((a, b) => a[0] - b[0]).map((a) => time2fee(a[3], fees));
}

function time2fee(time, fees) {
	if (time <= fees[0]) return fees[1];
	return fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
}

function time2min(time) {
	let [hour, min] = time.split(":");
	return parseInt(hour) * 60 + parseInt(min);
}
