/** 2738 2079
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (s.length <= numRows || numRows === 1) return s;
	let stacks = Array.from({ length: numRows }, () => []);
	let upDir = true;
	let index = 0;
	for (let str of s) {
		stacks[index].push(str);
		if (upDir) {
			if (index === numRows - 1) {
				upDir = !upDir;
				index--;
			} else {
				index++;
			}
		} else {
			if (index === 0) {
				upDir = !upDir;
				index++;
			} else {
				index--;
			}
		}
	}
	return stacks.map((a) => a.join("")).join("");
};

/** 3786 2217
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (s.length <= numRows || numRows === 1) return s;
	let stacks = Array.from({ length: numRows }, () => []);
	let dir = 1;
	let index = 0;
	for (let str of s) {
		stacks[index].push(str);
		if ((dir === 1 && index === numRows - 1) || (dir === -1 && index === 0)) dir *= -1;
		index += dir;
	}
	return stacks.map((a) => a.join("")).join("");
};

/** 8644 3300
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (s.length <= numRows || numRows === 1) return s;
	let stacks = Array.from({ length: numRows }, () => []);
	let dir = -1;
	let index = 0;
	for (let str of s) {
		stacks[index].push(str);
		if (index === numRows - 1 || index === 0) dir *= -1;
		index += dir;
	}
	return stacks.map((a) => a.join("")).join("");
};
