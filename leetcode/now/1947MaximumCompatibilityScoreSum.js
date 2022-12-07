/** 2353 0588
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function (students, mentors) {
	let len = students.length;
	let mask = Array.from({ length: len }, (_, i) => i);
	let perms = permutation(mask, len);
	// console.log(perms)
	let max = 0;
	for (let perm of perms) {
		let score = 0;
		for (let i = 0; i < len; i++) {
			let student = students[i];
			let mentor = mentors[perm[i]];
			for (let j = 0; j < students[0].length; j++) {
				score += student[j] === mentor[j] ? 1 : 0;
			}
		}
		if (max < score) max = score;
	}
	return max;
};

function permutation(arr, num) {
	let result = [];
	function DFS(perm) {
		if (perm.length === num) {
			result.push(perm);
			return;
		}
		for (let i = 0; i < arr.length; i++) {
			if (!perm.includes(arr[i])) DFS([...perm, arr[i]]);
		}
	}
	DFS([]);
	return result;
}

/**
 * @param {number[][]} students
 * @param {number[][]} mentors
 * @return {number}
 */
var maxCompatibilitySum = function (students, mentors) {
	let len = students.length;
	let dp = Array.from({ length: len }, (_, studentIdx) =>
		Array.from({ length: len }, (__, mentorIndex) => 0)
	);
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			let score = 0;
			for (let k = 0; k < students[i].length; k++) {
				score += students[i][k] === mentors[j][k] ? 1 : 0;
			}
			dp[i][j] = score;
		}
	}
	let perms = permutation(
		Array.from({ length: len }, (_, i) => i),
		len
	);
	let max = 0;
	for (let perm of perms) {
		let score = 0;
		for (let i = 0; i < perm.length; i++) {
			score += dp[i][perm[i]];
		}
		if (max < score) max = score;
	}

	return max;
};

function permutation(arr, num) {
	let result = [];
	function DFS(perm) {
		if (perm.length === num) {
			result.push(perm);
			return;
		}
		for (let i = 0; i < arr.length; i++) {
			if (!perm.includes(arr[i])) DFS([...perm, arr[i]]);
		}
	}
	DFS([]);
	return result;
}
