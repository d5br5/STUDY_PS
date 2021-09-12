function solution(n, info) {
	let max = -1;
	let answer = [];
	let shots = shotcombi(n);

	for (let i = 0; i < shots.length; i++) {
		let point = versus(info, shots[i]);
		if (point > max) {
			max = point;
			answer = shots[i];
		}
	}
	if (max === -1) return [-1];
	return answer;
}

function shotcombi(n) {
	let num = n + 10;
	let target = [];
	for (let i = 0; i < num; i++) {
		target.push(i);
	}
	let totalcase = [];
	let combi = combination(target, 10);

	for (let i = 0; i < combi.length; i++) {
		let count = 0;
		let nowcase = [];
		let pointcount = 0;
		for (let j = 0; j < num; j++) {
			if (combi[i].includes(j)) {
				nowcase.push(count);
				count = 0;
				pointcount++;
			} else {
				count++;
			}
		}
		nowcase.push(count);
		for (let j = pointcount + 1; j <= 10; j++) {
			nowcase.push(0);
		}
		totalcase.push(nowcase);
	}
	return totalcase;
}

function versus(app, lion) {
	let appPoint = 0;
	let lionPoint = 0;
	for (let i = 0; i < app.length; i++) {
		if (app[i] > lion[i]) {
			// 어피치 많음
			appPoint += 10 - i;
		} else if (app[i] < lion[i]) {
			//라이언 많음
			lionPoint += 10 - i;
		} else {
			// 동률
			if (app[i] === 0 && lion[i] === 0) {
				continue;
			} else {
				appPoint += 10 - i;
			}
		}
	}
	if (appPoint >= lionPoint) return -1;
	return lionPoint - appPoint;
}

function combination(arr, num) {
	let result = [];
	if (num === 0) return;
	function DFS(count, start) {
		if (start.length === num) {
			result.push(start);
			return;
		}
		let point = arr.length - num + start.length;
		for (let i = count + 1; i <= point; i++) {
			DFS(i, [...start, arr[i]]);
		}
	}
	for (let i = 0; i <= arr.length - num; i++) {
		DFS(i, [arr[i]]);
	}
	return result;
}
