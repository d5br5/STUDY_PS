const permutations = (arr) => {
	if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
	return arr.reduce(
		(acc, item, i) =>
			acc.concat(
				permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [item, ...val])
			),
		[]
	);
};

permutations([1, 33, 5]);
// [ [1, 33, 5], [1, 5, 33], [33, 1, 5], [33, 5, 1], [5, 1, 33], [5, 33, 1] ]

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

console.log(permutation([1, 2, 3], 2));
