function solution(play_time, adv_time, logs) {
	if (play_time === adv_time) return "00:00:00";
	let play = toSec(play_time);
	let adv = toSec(adv_time);

	const total = Array.from({length: play + 1}, () => 0);
	for (let i = 0; i < logs.length; i++) {
		let [start, end] = logs[i].split("-");
		let left = toSec(start);
		let right = toSec(end);
		total[left]++;
		total[right]--;
	}
	for (let i = 1; i < total.length; i++) {
		total[i] += total[i - 1];
	}
	let time = 0;

	for (let i = 0; i < adv; i++) time += total[i];

	let max = time;
	let point = 0;

	for (let i = 0; i < play - adv; i++) {
		time += total[i + adv];
		time -= total[i];
		if (max < time) {
			max = time;
			point = i + 1;
		}
	}

	return toReg(point);
}

function toSec(Reg) {
	let splited = Reg.split(":").map((a) => parseInt(a));
	return 3600 * splited[0] + 60 * splited[1] + splited[2];
}

function toReg(sec) {
	let hour = parseInt(sec / 3600);
	sec = sec % 3600;
	let min = parseInt(sec / 60);
	sec = sec % 60;
	return `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${
		sec < 10 ? "0" + sec : sec
	}`;
}
