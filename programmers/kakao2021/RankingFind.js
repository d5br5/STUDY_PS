function solution(info, query) {
	let result = [];
	let parseInfo = info.map((a) => a.split(" "));
	for (let i = 0; i < query.length; i++) {
		let nowQ = query[i].split(" ").filter((a) => a !== "and");
		let search = [...parseInfo];
		for (let j = 0; j < nowQ.length; j++) {
			if (nowQ[j] === "-") continue;
			if (j === nowQ.length - 1) {
				search = search.filter((a) => a[j] >= nowQ[j]);
				break;
			}
			search = search.filter((a) => a[j] === nowQ[j]);
		}
		result.push(search.length);
	}
	return result;
}

function solution2(info, query) {
	let result = [];
	let parseInfo = info
		.map((a) => a.split(" "))
		.map((a) => [a[0], a[1], a[2], a[3], parseInt(a[4])]);
	for (let i = 0; i < query.length; i++) {
		let nowQ = query[i].split(" ").filter((a) => a !== "and");
		let search = [...parseInfo];
		for (let j = 0; j < nowQ.length - 1; j++) {
			if (nowQ[j] === "-") continue;
			search = search.filter((a) => a[j] === nowQ[j]);
		}
		search.sort((a, b) => a[4] - b[4]);
		result.push(binSearch(search, parseInt(nowQ[4])));
	}
	return result;
}

function solution3(info, query) {
	const map = new Map();
	let result = [];

	for (let i = 0; i < info.length; i++) {
		let infos = info[i].split(" ");
		let infoKey = `${infos[0][0]}${
			infos[1][0]
		}${infos[2][0].toUpperCase()}${infos[3][0].toUpperCase()}`;
		if (map.has(infoKey)) {
			map.set(infoKey, [...map.get(infoKey), parseInt(infos[4])]);
		} else {
			map.set(infoKey, [parseInt(infos[4])]);
		}
	}

	for (let [key, value] of map) {
		map.set(
			key,
			value.sort((a, b) => a - b)
		);
	}

	for (let i = 0; i < query.length; i++) {
		let count = 0;
		let Q = query[i].split(" ");
		Q = Q.filter((a) => a !== "and"); // ['java', 'backend', 'junior', 'pizza', '100'];
		let critic = parseInt(Q[4]);
		let QKey = `${Q[0][0]}${
			Q[1][0]
		}${Q[2][0].toUpperCase()}${Q[3][0].toUpperCase()}`;
		for (let [key, value] of map) {
			let contain = true;
			for (let i = 0; i < QKey.length; i++) {
				if (QKey[i] === "-") continue;
				if (!key.includes(QKey[i])) {
					contain = false;
					break;
				}
			}
			if (contain) {
				count += value.length - binarySearch(value, critic);
			}
		}
		result.push(count);
	}
	return result;
}

function binSearch(arr, critic) {
	if (arr.length === 1) {
		if (arr[0][4] >= critic) return 1;
		return 0;
	}
	if (arr.length === 2) {
		if (arr[0][4] >= critic) return 2;
		if (arr[1][4] >= critic) return 1;
		return 0;
	}
	let left = 0;
	let right = arr.length - 1;
	let point = 0;
	while (right > left + 1) {
		let middle = Math.floor((left + right) / 2);
		if (arr[middle][4] >= critic) {
			if (arr[middle - 1][4] >= critic) {
				right = middle;
			} else {
				point = middle;
				break;
			}
		} else {
			if (arr[middle + 1][4] >= critic) {
				point = middle + 1;
				break;
			} else {
				left = middle;
			}
		}
	}
	return arr.length - point;
}

function binarySearch2(arr, target) {
	let left = 0;
	let right = arr.length;
	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] < target) left = mid + 1;
		else right = mid;
	}
	return left;
}
