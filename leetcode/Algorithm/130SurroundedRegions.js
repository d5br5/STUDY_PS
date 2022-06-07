/** exceed 53/58
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
	for (let i = 0; i < board.length; i++) {
		if (board[i][0] === "O") DFS(i, 0);
		if (board[i][board[0].length - 1] === "O") DFS(i, board[0].length - 1);
	}

	for (let i = 0; i < board[0].length; i++) {
		if (board[0][i] === "O") DFS(0, i);
		if (board[board.length - 1][i] === "O") DFS(board.length - 1, i);
	}

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === "O") {
				board[i][j] = "X";
			} else if (board[i][j] === "H") {
				board[i][j] = "O";
			}
		}
	}

	function DFS(i, j) {
		let stack = [[i, j]];
		while (stack.length > 0) {
			let [a, b] = stack.shift();
			board[a][b] = "H";
			if (a > 0 && board[a - 1][b] === "O") stack.push([a - 1, b]);
			if (b > 0 && board[a][b - 1] === "O") stack.push([a, b - 1]);
			if (a < board.length - 1 && board[a + 1][b] === "O")
				stack.push([a + 1, b]);
			if (b < board[0].length - 1 && board[a][b + 1] === "O")
				stack.push([a, b + 1]);
		}
	}

	// 3939 4443
	function DFS2(a, b) {
		board[a][b] = "H";
		if (a > 0 && board[a - 1][b] === "O") DFS(a - 1, b);
		if (b > 0 && board[a][b - 1] === "O") DFS(a, b - 1);
		if (a < board.length - 1 && board[a + 1][b] === "O") DFS(a + 1, b);
		if (b < board[0].length - 1 && board[a][b + 1] === "O") DFS(a, b + 1);
	}
};
