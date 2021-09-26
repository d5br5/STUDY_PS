function solution(numbers) {
	let origin = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	let fil = origin.filter((a) => !numbers.includes(a));
	let res = 0;
	for (let i = 0; i < fil.length; i++) {
		res += fil[i];
	}
	return res;
}
