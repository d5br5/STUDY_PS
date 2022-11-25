/** 6218 8834
 * @param {number} size
 */
var MovingAverage = function (size) {
	this.size = size;
	this.stack = [];
	this.total = 0;
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
	if (this.stack.length < this.size) {
		this.stack.push(val);
		this.total += val;
	} else {
		this.stack.push(val);
		this.total += val - this.stack.shift();
	}
	return this.total / this.stack.length;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
