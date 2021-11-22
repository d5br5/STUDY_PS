function solution(rows, columns, connections, queries) {
	let newcons = [...connections];
	let tmpIndex = [];
	let result = [];

	for (let i = 0; i < queries.length; i++) {
		let q = queries[i];
		let up = Math.min(q[0], q[2]);
		let down = Math.max(q[0], q[2]);
		let left = Math.min(q[1], q[3]);
		let right = Math.max(q[1], q[3]);
		let mapInfo = [up, left, down, right];

		for (let j = 0; j < newcons.length; j++) {
			if (isTarget(newcons[j], mapInfo)) {
				tmpIndex.push(j);
			}
		}
		result.push(tmpIndex.length);
		newcons = newcons.filter((newcon, index) => !tmpIndex.includes(index));
		tmpIndex = [];
	}

	function isTarget(con, mapInfo) {
		let one = [con[0], con[1]];
		let two = [con[2], con[3]];

		if ((isIn(one) && !isIn(two)) || (!isIn(one) && isIn(two))) return true;

		function isIn(point) {
			let [up, left, down, right] = mapInfo;
			if (
				up <= point[0] &&
				point[0] <= down &&
				left <= point[1] &&
				point[1] <= right
			) {
				return true;
			}
			return false;
		}
	}

	return result;
}
