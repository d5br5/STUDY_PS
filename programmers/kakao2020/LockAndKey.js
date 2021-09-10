function solution(key, lock) {
	let K = key.length;
	let L = lock.length;
	let fullBoardSize = L + 2 * K - 2;
	let LBOARD = makeMap(lock, K - 1, K - 1, fullBoardSize, L);
	let nowK = key;
	if (matching(nowK, LBOARD, K, L)) return true;
	nowK = rotate(nowK);
	if (matching(nowK, LBOARD, K, L)) return true;
	nowK = rotate(nowK);
	if (matching(nowK, LBOARD, K, L)) return true;
	nowK = rotate(nowK);
	if (matching(nowK, LBOARD, K, L)) return true;

	return false;
}

function matching(key, lock, k, l) {
	const fullSize = l + 2 * k - 2;
	for (let a = 0; a < k + l - 1; a++) {
		for (let b = 0; b < k + l - 1; b++) {
			const newKey = makeMap(key, a, b, fullSize, k);
			if (isFull(newKey, lock, k, l)) return true;
		}
	}
}

function isFull(arr1, arr2, k, l) {
	for (let c = k - 1; c < k + l - 1; c++) {
		for (let d = k - 1; d < k + l - 1; d++) {
			if (arr1[c][d] === arr2[c][d]) return false;
		}
	}
	return true;
}

function makeMap(arr, x, y, totalSize, oneLength) {
	const board = Array.from(Array(totalSize), () => Array(totalSize).fill(0));
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
