/** 2528 5658
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
	nums.sort();
	let splited = [];
	let tmp = [];
	for (let i = 0; i < nums.length - 1; i++) {
		tmp.push(nums[i]);
		if (nums[i] !== nums[i + 1]) {
			splited.push(tmp);
			tmp = [];
		}
	}
	splited.push([...tmp, nums[nums.length - 1]]);

	let result = [[]];

	for (let i = 0; i < splited.length; i++) {
		let now = splited[i][0];
		let tmp1 = [...result];
		let tmp2 = [...result];

		for (let j = 0; j < splited[i].length; j++) {
			tmp2 = tmp2.map((a) => [...a, now]);
			tmp1 = [...tmp1, ...tmp2];
		}

		result = [...tmp1];
	}
	return result;
};
