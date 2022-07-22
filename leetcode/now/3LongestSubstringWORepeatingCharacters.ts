// 6068 6500

function lengthOfLongestSubstring(s: string): number {
	let result: number = 0;
	let arr = [];
	for (let i = 0; i < s.length; i++) {
		if (arr.includes(s[i])) {
			if (result < arr.length) {
				result = arr.length;
			}
			arr = arr.slice(arr.indexOf(s[i]) + 1);
		}
		arr.push(s[i]);
	}
	return result > arr.length ? result : arr.length;
}
