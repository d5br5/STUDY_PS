/** 6967 0738
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
	salary.sort((a, b) => a - b);
	salary.shift();
	salary.pop();
	let sum = salary.reduce((prev, curr) => prev + curr, 0);
	return sum / salary.length;
};

/** 6620 7623
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
	let max = 1000;
	let min = 10000000;
	let sum = 0;
	for (let sal of salary) {
		sum += sal;
		if (max < sal) max = sal;
		if (min > sal) min = sal;
	}
	return (sum - max - min) / (salary.length - 2);
};
