// 26m

function solution(p) {
	if (p === "") return "";
	if (isRight(p)) return p;
	let [u, v] = split(p);
	if (isRight(u)) {
		return u + solution(v);
	} else {
		return "(" + solution(v) + ")" + reversing(u);
	}
}

function reversing(p) {
	let string = "";
	for (let i = 1; i < p.length - 1; i++) {
		if (p[i] === ")") {
			string += "(";
		} else {
			string += ")";
		}
	}
	return string;
	// return p.slice(1,p.length-1).split("").map(c=> (c==='('? ')' : '(')).join("");
}

function split(p) {
	let left = 0;
	let right = 0;
	for (let i = 0; i < p.length; i++) {
		if (p[i] === "(") {
			left++;
		} else {
			right++;
		}
		if (left === right) {
			return [p.slice(0, left + right), p.slice(left + right)];
		}
	}
	return [p, ""];
}

function isRight(p) {
	let stack = [];
	for (let i = 0; i < p.length; i++) {
		if (p[i] === "(") {
			stack.push("(");
		} else if (p[i] === ")") {
			if (stack.length === 0) {
				return false;
			} else if (stack[stack.length - 1] === "(") {
				stack.pop();
			}
		}
	}

	return stack.length === 0;
}
