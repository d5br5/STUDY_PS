//15m

function solution(s) {
	let min = 1000;
	let point = parseInt(s.length / 2) + 2;
	for (let i = 1; i < point; i++) {
		let now = cutting(s, i);
		if (now < min) min = now;
	}
	return min;
}

function cutting(str, num) {
	let now = str.slice(0, num);
	let count = 1;
	let result = "";
	for (let i = num; i < str.length; i = i + num) {
		if (str.slice(i, i + num) == now) {
			count++;
		} else {
			if (count === 1) {
				result += now;
			} else {
				result += count + now;
			}
			now = str.slice(i, i + num);
			count = 1;
		}
	}
	if (count === 1) {
		result += now;
	} else {
		result += count + now;
	}
	return result.length;
}
