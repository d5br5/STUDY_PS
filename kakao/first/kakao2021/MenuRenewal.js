function solution(orders, course) {
	let result = [];
	let parsedOrder = orders.map((a) => a.split("").sort());
	for (let i = 0; i < course.length; i++) {
		let count = course[i];
		let filtered = parsedOrder.filter((a) => a.length >= count);
		if (filtered.length === 0) continue;
		let combis = filtered.map((a) => combination(a, count));
		let obj = {};
		for (let j = 0; j < combis.length; j++) {
			for (let k = 0; k < combis[j].length; k++) {
				if (obj[combis[j][k]]) {
					obj[combis[j][k]][1] += 1;
				} else {
					obj[combis[j][k]] = [combis[j][k], 1];
				}
			}
		}
		let values = Object.values(obj);
		values = values.sort((a, b) => b[1] - a[1]).filter((a) => a[1] > 1);
		let fill = values.filter((a) => a[1] === values[0][1]);
		fill.forEach((a) => result.push(a[0]));
	}
	return result.sort();
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
	return result.map((a) => a.join(""));
}
