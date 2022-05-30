/** 5745 3396
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
	let count = 0;
	let visited = Array.from({ length: isConnected.length }, (a, b) => false);
	for (let i = 0; i < isConnected.length; i++) {
		for (let j = i; j < isConnected[0].length; j++) {
			if (isConnected[i][j] === 1 && !visited[j]) {
				count++;
				check(j);
			}
		}
	}
	function check(j) {
		visited[j] = true;
		for (let i = 0; i < isConnected.length; i++) {
			if (isConnected[j][i] === 1 && !visited[i]) check(i);
		}
	}
	return count;
};
