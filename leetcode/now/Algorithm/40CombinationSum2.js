/** 7656 7700
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	candidates.sort((a, b) => b - a);
	let result = [];

	for (let i = 0; i < candidates.length; i++) {
		let now = candidates[i];
		if (i > 0 && now === candidates[i - 1]) continue;
		if (now === target) result.push([candidates[i]]);
		if (now >= target) continue;
		DFS(i, [now], now);
	}

	function DFS(index, arr, sum) {
		for (let i = index + 1; i < candidates.length; i++) {
			let now = candidates[i];
			if (i > index + 1 && now === candidates[i - 1]) continue;
			let nowSum = sum + now;
			if (nowSum === target) result.push([...arr, now]);
			if (nowSum >= target) continue;
			DFS(i, [...arr, now], nowSum);
		}
	}

	return result;
};
