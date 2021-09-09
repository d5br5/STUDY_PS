function solution(key, lock) {
	let K = key.length;
	let L = lock.length;
	let fullBoardSize = L + 2 * K - 2;
	let LBOARD = makeMap(lock, K - 1, K - 1, fullBoardSize, L);

	let nowK = key;
	if (matching(nowK, LBOARD, K, L)) return true;

	return false;
}

function matching(key, lock, k, l) {
	for (let i = 0; i < k + l - 2; i++) {
		for (let j = 0; j < k + l - 2; j++) {
			if (isFull(key, i, j, lock, k, l)) return true;
		}
	}
	return false;
}

function isFull(key, x, y, board, k, l) {
	let newBoard = [...board];
	for (let i = 0; i < k; i++) {
		for (let j = 0; j < k; y++) {
			if (newBoard[i + x][j + y] === 1 && key[i][j] === 1) {
				return false;
			} else if (newBoard[i + x][j + y] === 0 && key[i][j] === 0) {
				newBoard[i + x][j + y] = 0;
			} else {
				newBoard[i + x][j + y] = 1;
			}
		}
	}
	for (let i = k - 1; i <= k + l - 2; i++) {
		for (let j = k - 1; j <= k + l - 2; j++) {
			if (newBoard[i][j] === 0) {
				return false;
			}
		}
	}
	return true;
}

function makeMap(arr, x, y, totalSize, oneLength) {
	let zeros = [];
	let board = [];
	for (let i = 0; i < totalSize; i++) {
		zeros.push(0);
	}
	for (let i = 0; i < totalSize; i++) {
		board.push([...zeros]);
	}
	for (let i = 0; i < oneLength; i++) {
		for (let j = 0; j < oneLength; j++) {
			board[i + x][j + y] = arr[i][j];
		}
	}
	return board;
}

function rotate(board) {
	let len = board.length;
	let result = [];
	let zeros = [];
	for (let i = 0; i < len; i++) {
		zeros.push(0);
	}
	for (let i = 0; i < len; i++) {
		result.push([...zeros]);
	}
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			result[i][j] = board[len - j - 1][i];
		}
	}
	return result;
}
