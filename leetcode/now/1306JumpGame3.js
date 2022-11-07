/** 8139 8918
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
	if (arr[start] === 0) return true;
	let visited = Array.from({ length: arr.length }, () => false);
	let q = [start];
	let now, step;

	while (q.length > 0) {
		now = q.shift();
		step = arr[now];
		visited[now] = true;
		if (now - step >= 0 && !visited[now - step]) {
			if (arr[now - step] === 0) return true;
			q.push(now - step);
		}
		if (now + step <= arr.length - 1 && !visited[now + step]) {
			if (arr[now + step] === 0) return true;
			q.push(now + step);
		}
	}
	return false;
};

/** 5152 7749
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
	if (start >= 0 && start < arr.length && arr[start] >= 0) {
		if (arr[start] == 0) return true;
		arr[start] = -arr[start];
		return canReach(arr, start + arr[start]) || canReach(arr, start - arr[start]);
	}
	return false;
};
