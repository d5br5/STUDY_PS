/** 2653 3850
 * @param {number[]} nums
 */
var Solution = function (nums) {
	this.origin = nums;
	this.shuffled;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
	return this.origin;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
	this.shuffled = [...this.origin];
	let len = this.shuffled.length;
	for (let i = 0; i < len; i++) {
		let random = parseInt(Math.random() * len);
		let tmp = this.shuffled[i];
		this.shuffled[i] = this.shuffled[random];
		this.shuffled[random] = tmp;
	}
	return this.shuffled;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
