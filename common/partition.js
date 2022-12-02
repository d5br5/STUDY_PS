function partition(num, elem) {
	let result = [];
	if (num === 0) return;

	function DFS(arr, sum) {
		if (arr.length === elem) {
			if (sum === num) result.push(arr);
			return;
		}
		let point = num - sum;
		for (let i = point; i >= 0; i--) {
			DFS([...arr, i], sum + i);
		}
	}
	DFS([], 0);
	return result;
}

console.log(partition(5, 4));
