/** accuracy 50/223
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
	if (nums.length === 1) return 1;
	let points = [];

	for (let num of nums) {
		if (points.length <= 0 || Math.min(...points[points.length - 1]) < num) {
			points.push([num]);
		} else {
			points[points.length - 1].push(num);
		}
	}

	let answer = points.length;
	let count = 0;

	// console.log(points)

	for (let i = 0; i < points[0].length; i++) {
		DFS(points[0][i], 1);
	}

	function DFS(num, len) {
		if (len === answer) {
			count++;
			return;
		}
		let filtered = points[len].filter((a) => num < a);
		for (let i = 0; i < filtered.length; i++) {
			DFS(filtered[i], len + 1);
		}
	}

	return count;
};

// 5987 8025
// 정답 긁어온 것. 다시 풀 것
var findNumberOfLIS = function (nums) {
	const dp = Array(nums.length).fill(1);
	const count = Array(nums.length).fill(1);
	let max = 0;
	let ans = 0;

	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] >= nums[j]) continue;

			if (dp[i] === dp[j] + 1) count[i] += count[j];
			else if (dp[i] < dp[j] + 1) {
				dp[i] = dp[j] + 1;
				count[i] = count[j];
			}
		}
		max = Math.max(max, dp[i]);
	}

	for (let i = 0; i < dp.length; i++) {
		if (dp[i] === max) ans += count[i];
	}
	return ans;
};
