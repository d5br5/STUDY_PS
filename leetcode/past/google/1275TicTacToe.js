/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
	let Acoord = [];
	let Bcoord = [];
	for (let i = 0; i < moves.length; i += 2) {
		Acoord.push(moves[i]);
	}
	for (let i = 1; i < moves.length; i += 2) {
		Bcoord.push(moves[i]);
	}
	if (isEnd(Acoord)) return "A";
	if (isEnd(Bcoord)) return "B";
	if (moves.length === 9) return "Draw";
	return "Pending";
};

function isEnd(coord) {
	if (coord.length < 3) return false;
	let board = [
		[false, false, false],
		[false, false, false],
		[false, false, false],
	];
	for (let i = 0; i < coord.length; i++) {
		board[coord[i][0]][coord[i][1]] = true;
	}
	if (board[0][0] && board[0][1] && board[0][2]) return true;
	if (board[1][0] && board[1][1] && board[1][2]) return true;
	if (board[2][0] && board[2][1] && board[2][2]) return true;

	if (board[0][0] && board[1][0] && board[2][0]) return true;
	if (board[0][1] && board[1][1] && board[2][1]) return true;
	if (board[0][2] && board[1][2] && board[2][2]) return true;

	if (board[0][0] && board[1][1] && board[2][2]) return true;
	if (board[2][0] && board[1][1] && board[0][2]) return true;

	return false;
}
