function solution(schedule) {
	//모든 분반 map
	let times = [];
	let order = {MO: 0, TU: 1, WE: 2, TH: 3, FR: 4};
	let subs = [
		"00",
		"01",
		"02",
		"03",
		"10",
		"11",
		"12",
		"13",
		"20",
		"21",
		"22",
		"23",
		"30",
		"31",
		"32",
		"33",
		"40",
		"41",
		"42",
		"43",
	];
	for (let i = 0; i < schedule.length; i++) {
		for (let j = 0; j < schedule[i].length; j++) {
			let now = schedule[i][j];
			let splited = now.split(" ");
			if (splited.length === 4) {
				// 월수분반
				let [first, firstTime, second, secondTime] = splited;
				times.push([
					i + "" + j,
					order[first],
					timeTransform(firstTime),
					timeTransform(firstTime) + 1.5,
				]);
				times.push([
					i + "" + j,
					order[second],
					timeTransform(secondTime),
					timeTransform(secondTime) + 1.5,
				]);
			} else {
				// 통강
				let [first, firstTime] = splited;
				times.push([
					i + "" + j,
					order[first],
					timeTransform(firstTime),
					timeTransform(firstTime) + 3,
				]);
			}
		}
	}
	console.log(times);
	let conflict = [
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
		[[], [], [], []],
	]; // i, j, k -> i과목, j분반, k:겹치는 과목분반 "24"

	for (let i = 0; i < subs.length; i++) {
		let filtered = times.filter((a) => a[0] === subs[i]); // 현재과목 시간표
		let tmp = [];
		for (let j = 0; j < times.length; j++) {
			if (times[j][0][0] !== subs[i][0]) {
				// 다른과목
				if (filtered.length === 2) {
					// 현재과목은 분강
					// console.log(filtered[1], times[j]);
					if (
						filtered[0][1] === times[j][1] &&
						!isOk(filtered[0][2], filtered[0][3], times[j][2], times[j][3])
					) {
						tmp.push(times[j][0]);
					}
					if (
						filtered[1][1] === times[j][1] &&
						!isOk(filtered[1][2], filtered[1][3], times[j][2], times[j][3])
					) {
						tmp.push(times[j][0]);
					}
				} else {
					// 현재과목이 통강

					if (
						filtered[0][1] === times[j][1] &&
						!isOk(filtered[0][2], filtered[0][3], times[j][2], times[j][3])
					) {
						tmp.push(times[j][0]);
					}
				}
			}
		}

		let sett = Array.from(new Set(tmp));
		let a = parseInt(subs[i][0]);
		let b = parseInt(subs[i][1]);
		conflict[a][b].push(...sett);
	}

	console.log(conflict);
	let count = 0;

	for (let a = 0; a < 4; a++) {
		let acon = [...conflict[0][a]]; // ['21','22'];
		let anow = "0" + a;
		for (let b = 0; b < 4; b++) {
			let bcon = [...conflict[1][b]];
			let bnow = "1" + b;
			if (acon.includes(bnow)) continue;
			let isbreak = false;
			for (let aa = 0; aa < acon.length; aa++) {
				if (bcon.includes(anow)) {
					isbreak = true;
					break;
				}
			}
			if (isbreak) continue;
			for (let c = 0; c < 4; c++) {
				let ccon = [...conflict[2][c]];
				let cnow = "2" + c;
				if (acon.includes(cnow)) continue;
				if (bcon.includes(cnow)) continue;
				for (let d = 0; d < 4; d++) {
					let dcon = [...conflict[3][d]];
					let dnow = "3" + d;
					if (acon.includes(dnow)) continue;
					if (bcon.includes(dnow)) continue;
					if (ccon.includes(dnow)) continue;
					for (let e = 0; e < 4; e++) {
						let econ = [...conflict[4][e]];
						let enow = "4" + e;

						let isbreak = false;
						for (let aa = 0; aa < econ.length; aa++) {
							if (econ.includes(anow)) {
								isbreak = true;
								break;
							}
						}

						for (let bb = 0; bb < econ.length; bb++) {
							if (econ.includes(bnow)) {
								isbreak = true;
								break;
							}
						}

						for (let cc = 0; cc < econ.length; cc++) {
							if (econ.includes(cnow)) {
								isbreak = true;
								break;
							}
						}

						for (let dd = 0; dd < econ.length; dd++) {
							if (econ.includes(dnow)) {
								isbreak = true;
								break;
							}
						}
						if (isbreak) continue;

						if (acon.includes(enow)) continue;
						if (bcon.includes(enow)) continue;
						if (ccon.includes(enow)) continue;
						if (dcon.includes(enow)) continue;
						count++;
					}
				}
			}
		}
	}
	return count;
}

function timeTransform(str) {
	let [hh, mm] = str.split(":");
	if (mm === "30") {
		return parseInt(hh) + 0.5;
	} else {
		return parseInt(hh);
	}
}

function isOk(aa, bb, cc, dd) {
	let a = parseInt(aa);
	let b = parseInt(bb);
	let c = parseInt(cc);
	let d = parseInt(dd);
	return d < a || b < c;
}
