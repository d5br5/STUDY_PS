/** 7519 3756
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
	candidates = candidates.sort().reverse();
	let result = [];

	for (let i = 0; i < candidates.length; i++) {
		let now = candidates[i];
		if (now === target) result.push([candidates[i]]);
		if (now >= target) continue;
		DFS(i, [now], now);
	}

	function DFS(index, arr, sum) {
		for (let i = index; i < candidates.length; i++) {
			let now = candidates[i];
			let nowSum = sum + now;
			if (nowSum === target) result.push([...arr, now]);
			if (nowSum >= target) continue;
			DFS(i, [...arr, candidates[i]], nowSum);
		}
	}

	return result;
};
