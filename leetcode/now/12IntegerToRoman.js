/** 4966 3511
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	let index = {
		1: "I",
		4: "IV",
		5: "V",
		9: "IX",
		10: "X",
		40: "XL",
		50: "L",
		90: "XC",
		100: "C",
		400: "CD",
		500: "D",
		900: "CM",
		1000: "M",
	};

	let result = "";
	let mock = 1000;
	while (num > 0) {
		let res = parseInt(num / mock);
		if ([4, 5, 9].includes(res)) {
			result += index[mock * res];
		} else if ([6, 7, 8].includes(res)) {
			result += index[mock * 5];
			result += index[mock].repeat(res - 5);
		} else if ([1, 2, 3].includes(res)) {
			result += index[mock].repeat(res);
		}
		num = num % mock;
		mock /= 10;
	}
	return result;
};

/** 9742 6312
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
	let index = [
		["M", "MM", "MMM"],
		["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
		["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
		["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
	];
	let result = "";

	for (let i = 3; i >= 0; i--) {
		let res = parseInt(num / 10 ** i);
		if (res !== 0) {
			result += index[3 - i][res - 1];
		}
		num = num % 10 ** i;
	}
	return result;
};
