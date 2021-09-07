function solution(N, number) {
	if (N === number) return 1;

	let arr = [[N], [], [], [], [], [], [], []];

	for (let i = 1; i < 8; i++) {
		arr[i - 1].forEach((elem) => {
			arr[i].push(elem + N);
			arr[i].push(elem - N);
			arr[i].push(elem * N);
			arr[i].push(elem * 10 + N);
			parseInt(arr[i].push(elem / N));
		});
		if (arr[i].includes(number)) return i + 1;
	}
	return -1;
}
