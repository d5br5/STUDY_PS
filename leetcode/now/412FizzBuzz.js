/** 9194 5028
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	return Array.from({ length: n }, (v, i) => {
		if ((i + 1) % 15 === 0) {
			return "FizzBuzz";
		} else if ((i + 1) % 3 === 0) {
			return "Fizz";
		} else if ((i + 1) % 5 === 0) {
			return "Buzz";
		} else {
			return `${i + 1}`;
		}
	});
};

/** 8852 3017
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
	return Array.from({ length: n }, (v, i) => {
		let str = "";
		if ((i + 1) % 3 === 0) str += "Fizz";
		if ((i + 1) % 5 === 0) str += "Buzz";
		if (str === "") str = `${i + 1}`;
		return str;
	});
};
