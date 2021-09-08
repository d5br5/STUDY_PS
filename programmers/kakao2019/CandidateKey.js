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
