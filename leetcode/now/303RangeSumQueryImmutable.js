/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
	this.nums = nums;
};

/** 1170 1183
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
	return this.nums.slice(left, right + 1).reduce((prev, next) => prev + next, 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

/** 7943 7095
 * @param {number[]} nums
 */
var NumArray = function (nums) {
	this.sums = [nums[0]];
	for (let i = 1; i < nums.length; i++) {
		this.sums[i] = this.sums[i - 1] + nums[i];
	}
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
	return left === 0 ? this.sums[right] : this.sums[right] - this.sums[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
