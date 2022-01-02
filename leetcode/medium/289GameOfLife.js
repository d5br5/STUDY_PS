/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
	// 1은 주변에 2-3 개 1 있으면 1 나머지 0
	// 0은 주변에 정확히 3개 1 있으면 1 나머지 0

	let result = Array.from({length: board.length}, (a, b) => []);
	for (let a = 0; a < board.length; a++) {
		for (let b = 0; b < board[0].length; b++) {
			result[a][b] = countLive(a, b);
		}
	}

	for (let a = 0; a < board.length; a++) {
		for (let b = 0; b < board[0].length; b++) {
			board[a][b] = result[a][b];
		}
	}

	function countLive(i, j) {
		let count = 0;

		if (i > 0 && j > 0 && board[i - 1][j - 1] === 1) count++;
		if (i > 0 && board[i - 1][j] === 1) count++;
		if (i > 0 && j < board[0].length - 1 && board[i - 1][j + 1] === 1) count++;

		if (j > 0 && board[i][j - 1] === 1) count++;
		if (j < board[0].length - 1 && board[i][j + 1] === 1) count++;

		if (i < board.length - 1 && j > 0 && board[i + 1][j - 1] === 1) count++;
		if (i < board.length - 1 && board[i + 1][j] === 1) count++;
		if (
			i < board.length - 1 &&
			j < board[0].length - 1 &&
			board[i + 1][j + 1] === 1
		)
			count++;

		if (board[i][j] === 1 && (count === 2 || count === 3)) return 1;
		if (board[i][j] === 0 && count === 3) return 1;
		return 0;
	}
};
