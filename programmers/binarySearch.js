function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length;
	while (left < right) {
		let mid = Math.floor((left + right) / 2);
		if (arr[mid] < target) left = mid + 1;
		else right = mid;
	}
	return left;
}

function binSearch(arr, critic) {
	let sorted = arr.sort((a, b) => a - b);
	let len = arr.length;
	if (sorted.length === 1) {
		if (sorted[0] >= critic) return 1;
		return 0;
	}
	if (sorted.length === 2) {
		if (sorted[0] >= critic) return 2;
		if (sorted[1] >= critic) return 1;
		return 0;
	}

	let left = 0;
	let right = arr.length;
	while (left < right) {
		let middle = Math.floor((left + right) / 2);
		if (sorted[middle] >= critic) {
			if (sorted[middle - 1] < critic) {
				return len - middle;
			} else {
				right = middle;
			}
		} else {
			if (sorted[middle + 1] >= critic) {
				return len - middle - 1;
			} else {
				left = middle;
			}
		}
	}
	return 0;
}
