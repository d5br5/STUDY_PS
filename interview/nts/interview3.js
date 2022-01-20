function solution(before, after) {
	return secToTime(timeToSec(after) - timeToSec(before));
}

function timeToSec(timeStr) {
	const [part, time] = timeStr.split(" ");
	const [HH, MM, SS] = time.split(":");
	let result = 0;
	const hour = parseInt(HH);
	const minute = parseInt(MM);
	const second = parseInt(SS);
	result += hour * 3600 + minute * 60 + second;
	if (part === "PM") result += 3600 * 12;
	return result;
}

function secToTime(sec) {
	sec = Math.abs(sec);
	let hour = Math.floor(sec / 3600);
	const restWithoutHour = sec % 3600;
	let minute = Math.floor(restWithoutHour / 60);
	let second = restWithoutHour % 60;
	if (hour < 10) hour = "0" + hour;
	if (minute < 10) minute = "0" + minute;
	if (second < 10) second = "0" + second;
	return `${hour}:${minute}:${second}`;
}

console.log(solution("AM 00:00:01", "AM 00:00:02"));
console.log(solution("PM 01:00:00", "AM 01:00:00"));
