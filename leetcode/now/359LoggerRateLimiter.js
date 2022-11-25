var Logger = function () {
	this.until = {};
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
	if (this.until[message]) {
		if (this.until[message] <= timestamp) {
			this.until[message] = timestamp + 10;
			return true;
		} else {
			return false;
		}
	} else {
		this.until[message] = timestamp + 10;
		return true;
	}
};

/** 8447 8194
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
