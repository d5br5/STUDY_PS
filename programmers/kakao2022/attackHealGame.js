function solution(board, skill) {
	let m = board.length;
	let n = board[0].length;
	for (let i = 0; i < skill.length; i++) {
		let state = 0;
		let r1 = skill[i][1];
		let c1 = skill[i][2];
		let r2 = skill[i][3];
		let c2 = skill[i][4];
		if (skill[i][0] === 1) {
			// 공격
			state = -1 * skill[i][5];
		} else {
			// 회복
			state = skill[i][5];
		}
		for (let j = r1; j <= r2; j++) {
			for (let k = c1; k <= c2; k++) {
				board[j][k] += state;
			}
		}
	}
	let count = 0;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] > 0) count++;
		}
	}
	return count;
}
