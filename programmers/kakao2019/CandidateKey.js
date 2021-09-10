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
