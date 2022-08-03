/** 5505 8157
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
	let sum = 0;
	let iter = parseInt((arr.length + 1) / 2);
	for (let i = 0; i < iter; i++) {
		let size = 2 * i + 1;
		for (let j = 0; j < arr.length - size + 1; j++) {
			for (let k = j; k < j + size; k++) {
				sum += arr[k];
			}
		}
	}
	return sum;
};
