/** 9782 9542
 * space O(N)
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
	if (s[0] === "0") return 0;
	if (s.length === 1) return 1;
	let arr = Array.from({ length: s.length + 1 }, () => 1);
	arr[1] = 1;
	for (let i = 1; i < s.length; i++) {
		let now = s[i];
		let before = s[i - 1];
		if (now === "0") {
			if (before === "1" || before === "2") {
				arr[i + 1] = arr[i - 1];
			} else {
				return 0;
			}
		} else {
			if (before === "0") {
				arr[i + 1] = arr[i];
			} else {
				let parsed = parseInt(s.slice(i - 1, i + 1));
				if (parsed <= 26) {
					arr[i + 1] = arr[i] + arr[i - 1];
				} else {
					arr[i + 1] = arr[i];
				}
			}
		}
	}
	return arr[arr.length - 1];
};

/** 3629 9287
 * space O(1)
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
	if (s[0] === "0") return 0;
	if (s.length === 1) return 1;

	let oneback = 1,
		twoback = 1,
		current;

	for (let i = 1; i < s.length; i++) {
		let now = s[i];
		let before = s[i - 1];

		if (now === "0") {
			if (before === "1" || before === "2") {
				current = twoback;
			} else {
				return 0;
			}
		} else {
			let parsed = parseInt(s.slice(i - 1, i + 1));
			if (before !== "0" && parsed <= 26) {
				current = oneback + twoback;
			} else {
				current = oneback;
			}
		}
		twoback = oneback;
		oneback = current;
	}
	return current;
};
