/** 9435 6354
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	let index = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	let stack = [];
	for (let str of s) {
		if (stack.length === 0) {
			stack.push(index[str]);
		} else {
			if (stack[stack.length - 1] < index[str]) {
				let pop = stack.pop();
				stack.push(index[str] - pop);
			} else {
				stack.push(index[str]);
			}
		}
	}
	return stack.reduce((a, b) => a + b, 0);
};
