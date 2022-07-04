/** time exceed
 * 1/6 pass
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
	let full = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
	let rows = board.map((a) => a.filter((b) => b !== "."));
	let cols = board.map((a, i) =>
		board.map((b) => b[i]).filter((b) => b !== ".")
	);

	let cubes = [];

	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 3; j++) {
			cubes.push(
				[
					...board[3 * i].slice(3 * j, 3 * j + 3),
					...board[3 * i + 1].slice(3 * j, 3 * j + 3),
					...board[3 * i + 2].slice(3 * j, 3 * j + 3),
				].filter((a) => a !== ".")
			);
		}
	}

	let doing = true;

	while (doing) {
		doing = false;
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (board[i][j] === ".") {
					doing = true;
					check(i, j);
				}
			}
		}
	}

	function check(i, j) {
		let cubenum = 3 * parseInt(i / 3) + parseInt(j / 3);
		let all = [...rows[i], ...cols[j], ...cubes[cubenum]];
		let filtered = full.filter((a) => !all.includes(a));
		if (filtered.length === 1) {
			let now = filtered[0];
			board[i][j] = now;
			rows[i].push(now);
			cols[j].push(now);
			cubes[cubenum].push(now);
		}
	}
};
