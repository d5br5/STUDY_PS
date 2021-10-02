/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	candidates.sort((a, b) => a - b);
	let result = [];

	function DFS(arr, sum, point) {
		if (sum === target) result.push(arr);
		if (sum > target) return;
		let validarr = candidates.filter((a) => a >= point);
		for (let i = 0; i < validarr.length; i++) {
			DFS([...arr, validarr[i]], sum + validarr[i], validarr[i]);
		}
	}

	for (let i = 0; i < candidates.length; i++) {
		DFS([candidates[i]], candidates[i], candidates[i]);
	}

	console.log(result);

	return result;
};
