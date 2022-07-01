/** 8435 4046
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	let start = 0;
	let end = matrix.length - 1;
	while (start < end) {
		let mid = Math.ceil((start + end) / 2);
		if (matrix[mid][0] === target) return true;
		if (matrix[mid][0] > target) {
			end = mid - 1;
		} else {
			start = mid;
		}
	}
	let point = start;
	if (matrix[point][matrix[point].length - 1] < target) return false;

	start = 0;
	end = matrix[point].length - 1;
	while (start < end) {
		let mid = Math.floor((start + end) / 2);
		if (matrix[point][mid] === target) return true;
		if (matrix[point][mid] < target) {
			start = mid + 1;
		} else {
			end = mid;
		}
	}
	return matrix[point][start] === target;
};

/** 3543 4046
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	let m = matrix.length;
	let n = matrix[0].length;
	let left = 0;
	let right = m * n - 1;
	let point;
	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		point = matrix[Math.floor(mid / n)][mid % n];
		if (point === target) return true;
		if (point > target) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return matrix[parseInt(left / n)][left % n] === target;
};

/** 2775 6299
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
	let n = matrix[0].length;
	let left = 0;
	let right = matrix.length * n - 1;
	let point;
	let mid;
	while (left < right) {
		mid = Math.floor((left + right) / 2);
		point = matrix[Math.floor(mid / n)][mid % n];
		if (point === target) return true;
		if (point > target) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return matrix[parseInt(left / n)][left % n] === target;
};
