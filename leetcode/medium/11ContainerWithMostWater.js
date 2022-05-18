/** time exceed
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let max = 0;
	for (let i = 0; i < height.length; i++) {
		for (let j = i + 1; j < height.length; j++) {
			let area = Math.min(height[i], height[j]) * (j - i);
			if (max < area) max = area;
		}
	}
	return max;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let left = 0;
	let right = height.length - 1;
	let max = 0;
	while (left < right) {
		let area = Math.min(height[left], height[right]) * (right - left);
		if (max < area) max = area;
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}
	return max;
};
