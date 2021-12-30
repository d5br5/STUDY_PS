/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	if (n === 1) return ["()"];
	let prev = generateParenthesis(n - 1);
	let before = prev.map((a) => "()" + a);
	let after = prev.map((a) => a + "()");
	let together = prev.map((a) => "(" + a + ")");
	return Array.from(new Set([...before, ...after, ...together]));
};

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
	return DFS(n).filter((a) => isPal(a));
};

function DFS(n) {
	let result = [];
	maker(["("], n - 1, n);
	function maker(arr, left, right) {
		if (left === 0) {
			return result.push(...arr.map((a) => a + ")".repeat(right)));
		} else if (right === 0) {
			return result.push(...arr.map((a) => a + "(".repeat(left)));
		} else {
			maker(
				arr.map((a) => a + "("),
				left - 1,
				right
			);
			maker(
				arr.map((a) => a + ")"),
				left,
				right - 1
			);
		}
	}
	return result;
}

function isPal(str) {
	let q = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "(") {
			q.push(str[i]);
		} else {
			if (q.length > 0) {
				q.pop();
			} else {
				return false;
			}
		}
	}
	return true;
}
