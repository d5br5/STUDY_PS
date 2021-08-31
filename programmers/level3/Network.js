function solution(n, computers) {
	let visited = [];
	let stack = [];
	let count = 0;

	for (let i = 0; i < n; i++) {
		visited.push(false);
	}

	function DFS(start) {
		stack.push(start);

		while (stack.length) {
			let now = stack.shift();
			visited[now] = true;
			for (let i = 0; i < n; i++) {
				if (computers[now][i] === 1 && !visited[i]) stack.push(i);
			}
		}
	}

	while (visited.includes(false)) {
		DFS(visited.indexOf(false));
		count++;
	}

	return count;
}
