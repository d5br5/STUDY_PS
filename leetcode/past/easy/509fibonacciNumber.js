/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	if (n == 0) {
		return 0;
	}
	if (n == 1) {
		return 1;
	}

	fir = 0;
	sec = 1;
	tmp = 0;
	count = 0;
	while (count + 1 < n) {
		tmp = fir + sec;
		fir = sec;
		sec = tmp;
		count++;
	}
	return tmp;
};

console.log(fib(4));
