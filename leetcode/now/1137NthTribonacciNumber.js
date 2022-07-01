/** 2950 5403
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
	if (n == 0) return 0;
	if (n == 1) return 1;
	if (n == 2) return 1;
	let one = 0;
	let two = 1;
	let three = 1;
	let sum = 0;
	for (let i = 0; i < n - 2; i++) {
		sum = one + two + three;
		one = two;
		two = three;
		three = sum;
	}
	return sum;
};

/** 4031 0503
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
	let arr = Array.from({ length: n + 1 }, () => 1);
	arr[0] = 0;
	for (let i = 3; i <= n; i++) {
		arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
	}
	return arr[arr.length - 1];
};
