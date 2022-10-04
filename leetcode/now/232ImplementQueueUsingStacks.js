// 5132 9353

var MyQueue = function () {
	this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	this.stack.unshift(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	return this.stack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	return this.stack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_4 = obj.empty()
 * var param_3 = obj.peek()

 */

// 8658 4406

var MyQueue = function () {
	this.stack = [];
	this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
	while (this.stack2.length > 0) {
		this.stack.push(this.stack2.pop());
	}
	this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
	while (this.stack.length > 0) {
		this.stack2.push(this.stack.pop());
	}
	return this.stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
	return this.stack[0] || this.stack2[this.stack2.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
	return this.stack.length === 0 && this.stack2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
