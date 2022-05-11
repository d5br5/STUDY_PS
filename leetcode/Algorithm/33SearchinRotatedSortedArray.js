/** 0743 2498
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	if (nums.length < 10) {
		return nums.indexOf(target);
	}
	let left = 0;
	let right = nums.length - 1;
	while (nums[left] > nums[right]) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] < nums[left]) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	let center;
	if (left === 0) {
		center = right + 1;
	} else if (right === nums.length - 1) {
		center = left;
	} else if (nums[left - 1] > nums[left]) {
		center = left;
	} else {
		center = right + 1;
	}

	if (target <= nums[nums.length - 1]) {
		left = center;
		right = nums.length - 1;
	} else if (target >= nums[0]) {
		left = 0;
		right = center - 1;
	} else {
		return -1;
	}

	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	if (nums[left] === target) return left;
	return -1;
};

/** 1331 9940
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	if (nums.length < 4) {
		return nums.indexOf(target);
	}
	let left = 0;
	let right = nums.length - 1;
	if (nums[left] > nums[right]) {
		while (nums[left] > nums[right]) {
			let mid = Math.floor((left + right) / 2);
			if (nums[mid] < nums[left]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}

		let center;
		if (left === 0) {
			center = right + 1;
		} else if (right === nums.length - 1) {
			center = left;
		} else if (nums[left - 1] > nums[left]) {
			center = left;
		} else {
			center = right + 1;
		}

		if (target <= nums[nums.length - 1]) {
			left = center;
			right = nums.length - 1;
		} else if (target >= nums[0]) {
			left = 0;
			right = center - 1;
		} else {
			return -1;
		}
	}

	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else {
			right = mid;
		}
	}

	if (nums[left] === target) return left;
	return -1;
};

/** 7452 8349
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (nums[mid] === target) {
			return mid;
		} else if (nums[left] > nums[mid]) {
			if (nums[mid] < target && nums[right] >= target) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		} else {
			if (nums[mid] > target && nums[left] <= target) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}
	}
	return -1;
};
