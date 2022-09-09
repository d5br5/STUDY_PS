/** 8637 5771
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((a, b) => a[0] - b[0]);
	let result = [];
	let now = intervals[0];

	for (let i = 1; i < intervals.length; i++) {
		if (now[1] >= intervals[i][0]) {
			now = [now[0], Math.max(intervals[i][1], now[1])];
		} else {
			result.push(now);
			now = intervals[i];
		}
	}
	result.push(now);
	return result;
};
