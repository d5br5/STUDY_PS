/** ok but time limit exceeded
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	for (let i = 0; i < numbers.length - 1; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
			if (numbers[i] + numbers[j] === target) return [i + 1, j + 1];
			if (numbers[i] + numbers[j] > target) break;
		}
	}
};

/** time exceed
 * pass 18/21
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	for (let i = 0; i < numbers.length - 1; i++) {
		let num = numbers.indexOf(target - numbers[i], i + 1);
		if (num !== -1) return [i + 1, num + 1];
	}
};

/** 2901 9322 best
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	let left = 0;
	let right = numbers.length - 1;
	while (left < right) {
		let sum = numbers[left] + numbers[right];
		if (sum === target) return [left + 1, right + 1];
		if (sum < target) {
			left++;
		} else {
			right--;
		}
	}
};
