/** 8623 2591
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
	return image
		.map((a) => {
			let arr = Array.from({ length: a.length }, () => 0);
			for (let i = 0; i < a.length; i++) {
				arr[a.length - 1 - i] = a[i];
			}
			return arr;
		})
		.map((a) => a.map((b) => 1 - b));
};
