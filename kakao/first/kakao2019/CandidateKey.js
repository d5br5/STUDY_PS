// xx

function solution(relation) {
	let totalCategory = relation[0].length;
	let max = 1;

	function flat(now, arr) {
		let string = "";
		for (let i = 0; i < arr.length; i++) {
			string += now[arr[i]] + ",";
		}
		return string;
	}

	function isValid(arr) {
		let conducted = relation.map((a) => flat(a, arr));

		let final = Array.from(new Set(conducted));
		if (conducted.length === final.length) return true;
		return false;
	}

	function isMax(arr) {
		for (let i = 0; i < arr.length; i++) {
			let now = [...arr.slice(0, i), ...arr.slice(i + 1)];
			if (isValid(now)) return false;
		}
		return true;
	}

	for (let i = 2; i <= totalCategory; i++) {
		let candi = subset(totalCategory, i);
		for (let j = 0; j < candi.length; j++) {
			if (isValid(candi[j]) && isMax(candi[j])) {
				max = i;
				break;
			}
		}
	}
	return max;
}

function subset(num, count) {
	let set = [];
	function DFS(point, arr) {
		if (arr.length === count) {
			set.push(arr);
			return;
		}
		for (let i = arr[arr.length - 1] + 1; i <= num - count + arr.length; i++) {
			DFS(i, [...arr, i]);
		}
	}

	for (let i = 0; i <= num - count; i++) {
		DFS(i, [i]);
	}
	return set;
}

// 50minute

function solution2(relation) {
	const cols = relation[0].length;
	const rows = relation.length;
	const sets = 1 << cols;
	const sk = new Set();

	for (let i = 1; i < sets; i++) {
		const tmp = new Set();
		for (let row = 0; row < rows; row++) {
			let key = "";
			for (let col = 0; col < cols; col++) {
				if (i & (1 << col)) key = String(key) + String(relation[row][col]);
			}
			tmp.add(key);
		}
		if (tmp.size === rows) sk.add(i);
	}

	for (let i of sk) {
		for (let j of sk) {
			if (i >= j) continue;
			if ((i & j) === i) sk.delete(j);
		}
	}

	console.log(Array.from(sk).map((e) => e.toString(2)));

	return sk.size;
}

function solution3(relation) {
	let categoryCount = relation[0].length;
	let index = [];
	let valid = [];
	let max = 0;
	for (let i = 0; i < categoryCount; i++) {
		index.push(i);
	}
	for (let i = 1; i <= categoryCount; i++) {
		let nowCom = combination(index, i);
		for (let j = 0; j < nowCom.length; j++) {
			if (unique(nowCom[j])) valid.push(flat(nowCom[j]));
			if (nowCom[j].length === 1) continue;
			let nowFlat = combination(nowCom[j], nowCom[j].length - 1);
			let ok = true;
			for (let k = 0; k < nowFlat.length; k++) {
				if (valid.includes(flat(nowFlat[k]))) {
					ok = false;
					break;
				}
			}
			if (ok) {
				if (max < i) max = i;
			}
		}
	}
	return max;

	function unique(combi) {
		let conducted = relation.map((a) => pick(a, combi));
		let final = Array.from(new Set(conducted));
		if (conducted.length === final.length) return true;
		return false;
	}
}

function pick(arr, index) {
	let string = "";
	for (let i = 0; i < arr.length; i++) {
		if (index.includes(i)) string += arr[i] + ",";
	}
	return string;
}

function flat(arr) {
	let string = "";
	for (let i = 0; i < arr.length - 1; i++) {
		string += arr[i] + ",";
	}
	return string + arr[arr.length - 1];
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
