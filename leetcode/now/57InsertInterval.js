/** 5324 4161
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
	if (intervals.length === 0) return [newInterval];

	let [left, right] = newInterval;

	if (left > intervals[intervals.length - 1][1])
		return [...intervals, newInterval];

	let point = 0;

	while (intervals[point][1] < left) point++;

	if (right < intervals[point][0]) {
		intervals.splice(point, 0, newInterval);
		return intervals;
	}

	let start = point;

	while (intervals[point][0] <= right) {
		point++;
		if (point === intervals.length) break;
	}

	let result = start === 0 ? [] : [...intervals.slice(0, start)];

	result.push([
		Math.min(left, intervals[start][0]),
		Math.max(right, intervals[point - 1][1]),
	]);

	return point === intervals.length
		? result
		: [...result, ...intervals.slice(point)];
};
