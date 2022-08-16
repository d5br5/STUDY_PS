/**
 * 150/300
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	return String(parseInt(num1) * parseInt(num2));
};

/** 150/300
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	let result = 0;
	let time1 = 1;
	for (let i = 0; i < num1.length; i++) {
		let time2 = 1;
		let one = num1[num1.length - 1 - i];
		for (let j = 0; j < num2.length; j++) {
			let two = num2[num2.length - 1 - j];
			result += BigInt(one) * parseInt(two) * time1 * time2;
			time2 *= 10;
		}
		time1 *= 10;
	}
	return String(result);
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
	return (BigInt(num1) * BigInt(num2)).toString();
};
