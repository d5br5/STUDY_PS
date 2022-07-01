/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
	let obj = {};
	for (let i = 0; i < s.length; i++) {
		if (!obj[s[i]]) obj[s[i]] = [];
		obj[s[i]].push(i);
	}
	let vals = Object.values(obj)
		.map((a) => [a[0], a[a.length - 1]])
		.sort((a, b) => a[0] - b[0]);

	let result = [];

	let start = 0;
	let end = vals[0][1];

	while (vals.length > 0) {
		let dup = vals.filter((a) => a[0] < end);
		vals = vals.filter((a) => a[0] > end).sort((a, b) => a[0] - b[0]);
		if (dup.length > 0) {
			end = Math.max(...dup.map((a) => a[1]), end);
		} else {
			result.push(end - start + 1);
			start = end + 1;
			if (vals[0]) end = Math.max(vals[0][1], end);
		}
	}
	if (end - start + 1 !== 0) result.push(end - start + 1);

	return result;
};
