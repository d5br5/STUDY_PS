/** 5255 5428
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	let result = [];
	nums.sort();

	DFS(
		[nums[0]],
		nums.filter((a, idx) => idx !== 0)
	);

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] === nums[i - 1]) continue;
		DFS(
			[nums[i]],
			nums.filter((a, idx) => idx !== i)
		);
	}

	function DFS(now, res) {
		if (now.length === nums.length || res.length === 0) {
			result.push(now);
			return;
		}
		DFS(
			[...now, res[0]],
			res.filter((a, idx) => idx !== 0)
		);
		for (let i = 1; i < res.length; i++) {
			if (res[i] === res[i - 1]) continue;
			DFS(
				[...now, res[i]],
				res.filter((a, idx) => idx !== i)
			);
		}
	}

	return result;
};

/** 6764 5111
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	let result = [];
	nums.sort();

	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		DFS(
			[nums[i]],
			nums.filter((a, idx) => idx !== i)
		);
	}

	function DFS(now, res) {
		if (now.length === nums.length || res.length === 0) return result.push(now);
		for (let i = 0; i < res.length; i++) {
			if (i > 0 && res[i] === res[i - 1]) continue;
			DFS(
				[...now, res[i]],
				res.filter((a, idx) => idx !== i)
			);
		}
	}

	return result;
};
