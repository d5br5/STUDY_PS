function solution(s) {
	const countObj = {};
	let resultArr = [];

	for (let i = 0; i < s.length; i++) {
		let now = s[i].toLowerCase();
		if (countObj[now]) {
			countObj[now]++;
		} else {
			countObj[now] = 1;
		}
	}

	let max = 0;
	const objectKeys = Object.keys(countObj);
	for (let i = 0; i < objectKeys.length; i++) {
		let keyNow = objectKeys[i];
		let countNow = countObj[keyNow];
		if (max < countNow) {
			max = countNow;
			resultArr = [keyNow];
		} else if (max === countNow) {
			resultArr.push(keyNow);
		}
	}

	return resultArr.sort(sortFn).join("");
}

function sortFn(a, b) {
	return a.charCodeAt(0) - b.charCodeAt(0);
}

console.log(solution("aAb"));
console.log(solution("BA"));
console.log(solution("BbA"));
