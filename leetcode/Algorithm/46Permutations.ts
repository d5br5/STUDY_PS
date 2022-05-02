function permute(nums: number[]): number[][] {
	let result = [];

	for (let i = 0; i < nums.length; i++) {
		Perm([nums[i]]);
	}

	function Perm(now) {
		if (now.length === nums.length) {
			result.push(now);
			return;
		}
		let rest = nums.filter((a) => !now.includes(a));
		for (let i = 0; i < rest.length; i++) {
			Perm([...now, rest[i]]);
		}
	}
	return result;
}
