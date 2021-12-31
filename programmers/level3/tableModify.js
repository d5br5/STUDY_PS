function solution(n, k, cmd) {
	let deleted = [];
	let arr = Array.from({length: n}, (v, i) => i);
	let nowIdx = k;
	for (let i = 0; i < cmd.length; i++) {
		if (cmd[i][0] === "U") {
			// Up
			nowIdx -= parseInt(cmd[i].split(" ")[1]);
		} else if (cmd[i][0] === "D") {
			// Down
			nowIdx += parseInt(cmd[i].split(" ")[1]);
		} else if (cmd[i][0] === "C") {
			// 삭제
			deleted.push(...arr.splice(nowIdx, 1));
			if (nowIdx >= arr.length) nowIdx = arr.length - 1;
		} else {
			// Z : 복구
			let tobeIdx = deleted.pop();
			let inserted = -1;
			for (let j = 0; j < arr.length; j++) {
				if (arr[j] > tobeIdx) {
					inserted = j;
					break;
				}
			}
			if (inserted === -1) inserted = arr.length;
			arr.splice(inserted, 0, tobeIdx);
			if (nowIdx >= inserted) {
				nowIdx++;
			}
		}
	}
	let result = "";
	let index = 0;
	for (let i = 0; i < n; i++) {
		if (arr[index] === i) {
			result += "O";
			index++;
		} else {
			result += "X";
		}
	}
	return result;
}
