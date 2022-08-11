/** 9585 8227
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	let max = 0;
	let left = 0;
	let right = height.length - 1;

	while (left < right) {
		let area = Math.min(height[left], height[right]) * (right - left);
		if (max < area) max = area;
		if (height[right] < height[left]) {
			right--;
		} else {
			left++;
		}
	}
	return max;
};
