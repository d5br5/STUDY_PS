/** 2064 1070
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === word[0] && check(i, j, 1, [`${i},${j}`])) return true;
		}
	}

	return false;

	function check(i, j, index, visited) {
		if (index === word.length) return true;
		if (i > 0 && board[i - 1][j] === word[index] && !visited.includes(`${i - 1},${j}`)) {
			if (check(i - 1, j, index + 1, [...visited, `${i - 1},${j}`])) return true;
		}
		if (j > 0 && board[i][j - 1] === word[index] && !visited.includes(`${i},${j - 1}`)) {
			if (check(i, j - 1, index + 1, [...visited, `${i},${j - 1}`])) return true;
		}
		if (
			i < board.length - 1 &&
			board[i + 1][j] === word[index] &&
			!visited.includes(`${i + 1},${j}`)
		) {
			if (check(i + 1, j, index + 1, [...visited, `${i + 1},${j}`])) return true;
		}
		if (
			j < board[0].length - 1 &&
			board[i][j + 1] === word[index] &&
			!visited.includes(`${i},${j + 1}`)
		) {
			if (check(i, j + 1, index + 1, [...visited, `${i},${j + 1}`])) return true;
		}
		return false;
	}
};
