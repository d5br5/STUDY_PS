var search = function (nums, target) {
	let left = 0;
	let right = nums.length;

	while (left < right) {
		let middle = parseInt((left + right) / 2);
		if (nums[middle] === target) return middle;
		if (nums[middle] < target) {
			left = middle + 1;
		} else {
			right = middle;
		}
	}
	return -1;
};
