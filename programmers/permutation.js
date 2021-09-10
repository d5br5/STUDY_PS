const permutations = (arr) => {
	if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
	return arr.reduce(
		(acc, item, i) =>
			acc.concat(
				permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
					item,
					...val,
				])
			),
		[]
	);
};

permutations([1, 33, 5]);
// [ [1, 33, 5], [1, 5, 33], [33, 1, 5], [33, 5, 1], [5, 1, 33], [5, 33, 1] ]

function Perms(arr, num) {
	let result = [];
	function DFS(count, start, indexes) {
		if (count === num) {
			result.push(start);
			return;
		}
		for (let i = 0; i < arr.length; i++) {
			if (!indexes.includes(i))
				DFS(count + 1, [...start, arr[i]], [...indexes, i]);
		}
	}

	for (let i = 0; i < arr.length; i++) {
		DFS(1, [arr[i]], [i]);
	}
	return result;
}
