function partition(howmany, num) {
	let result = [];
	if (num === 0) return;

	function DFS(start, arr, sum) {
		if (arr.length === howmany) {
			if (sum === num) result.push(arr);
			return;
		}
		let point = num - sum;
		for (let i = point; i >= 0; i--) {
			DFS(i, [...arr, i], sum + i);
		}
	}

	for (let i = num; i >= 0; i--) {
		DFS(i, [i], i);
	}
	return result;
}

console.log(partition(4, 5));
