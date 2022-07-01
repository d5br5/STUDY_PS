/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// 0502 5225

var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		for (let i = 1; i <= n; i++) {
			if (isBadVersion(i)) return i;
		}
	};
};

// 2843 7503

var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		if (n === 1 || isBadVersion(1)) return 1;

		let left = 1;
		let right = n;

		while (left < right) {
			let middle = Math.ceil((left + right) / 2);
			if (isBadVersion(middle)) {
				if (!isBadVersion(middle - 1)) return middle;
				right = middle;
			} else {
				left = middle;
			}
		}
	};
};

// 6938 9001

var solution = function (isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function (n) {
		if (n === 1 || isBadVersion(1)) return 1;

		let left = 1;
		let right = n;

		while (left < right) {
			let middle = Math.floor((left + right) / 2);
			if (isBadVersion(middle)) {
				right = middle;
			} else {
				left = middle + 1;
			}
		}
		return left;
	};
};
