// * 2057 0743

function combine(n: number, k: number): number[][] {
	let result = [];
	for (let i = 1; i <= n - k + 1; i++) {
		DFS([i], k);
	}
	function DFS(arr, num) {
		if (num === 1) result.push(arr);
		for (let i = arr[arr.length - 1] + 1; i <= n; i++) {
			DFS([...arr, i], num - 1);
		}
	}

	return result;
}
