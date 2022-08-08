/** 8139 7444
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
	function bitcheck(num) {
		let count = 0;
		while (num > 0) {
			count += num & 1;
			num >>= 1;
		}
		return count;
	}

	return arr
		.map((a) => [a, bitcheck(a)])
		.sort((a, b) => {
			if (a[1] !== b[1]) {
				return a[1] - b[1];
			} else {
				return a[0] - b[0];
			}
		})
		.map((a) => a[0]);
};
