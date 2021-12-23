function solution(n, left, right) {
	let leftinfo = [parseInt(left / n), left % n];
	let rightinfo = [parseInt(right / n), right % n];
	let answer = [];
	if (leftinfo[0] === rightinfo[0]) {
		let index = leftinfo[0];
		for (let i = leftinfo[1]; i <= rightinfo[1]; i++) {
			answer.push(Math.max(index, i) + 1);
		}
	} else {
		for (let i = leftinfo[1]; i < n; i++) {
			answer.push(Math.max(leftinfo[0], i) + 1);
		}
		for (let i = leftinfo[0] + 1; i < rightinfo[0]; i++) {
			for (let j = 0; j < n; j++) {
				answer.push(Math.max(i, j) + 1);
			}
		}
		for (let i = 0; i <= rightinfo[1]; i++) {
			answer.push(Math.max(rightinfo[0], i) + 1);
		}
	}
	return answer;
}

function solution(n, left, right) {
	var answer = [];
	for (let i = left; i <= right; i++) {
		answer.push(Math.max(i % n, parseInt(i / n)) + 1);
	}
	return answer;
}
