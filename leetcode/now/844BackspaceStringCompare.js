/** 5400 3070
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
	let stack1 = [];
	let stack2 = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === "#") {
			stack1.pop();
		} else {
			stack1.push(s[i]);
		}
	}
	for (let i = 0; i < t.length; i++) {
		if (t[i] === "#") {
			stack2.pop();
		} else {
			stack2.push(t[i]);
		}
	}
	if (stack1.length !== stack2.length) return false;
	for (let i = 0; i < stack1.length; i++) {
		if (stack1[i] !== stack2[i]) return false;
	}
	return true;
};

/** 2602 9315
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
	let i = s.length - 1;
	let j = t.length - 1;
	let sskip = 0;
	let tskip = 0;

	while (i >= 0 || j >= 0) {
		while (i >= 0) {
			if (s[i] === "#") {
				i--;
				sskip++;
			} else if (sskip > 0) {
				sskip--;
				i--;
			} else {
				break;
			}
		}
		while (j >= 0) {
			if (t[j] === "#") {
				j--;
				tskip++;
			} else if (tskip > 0) {
				tskip--;
				j--;
			} else {
				break;
			}
		}
		if (s[i] !== t[j]) return false;
		if (i >= 0 !== j >= 0) return false;
		i--;
		j--;
	}
	return true;
};
