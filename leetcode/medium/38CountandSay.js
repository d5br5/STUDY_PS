/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
	if (n === 1) return "1";
	let prev = countAndSay(n - 1);
	let result = "";
	let count = 0;
	let now = prev[0];
	for (let i = 0; i < prev.length; i++) {
		if (prev[i] === now) {
			count++;
		} else {
			result += count + now;
			count = 1;
			now = prev[i];
		}
	}
	result += count + now;
	return result;
};
