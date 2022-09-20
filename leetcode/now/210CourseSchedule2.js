/** 0516 0519
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
	let inNode = Array.from({ length: numCourses }, () => 0);
	let graph = Array.from({ length: numCourses }, () => Array.from({ length: numCourses }, () => 0));
	for (let [after, before] of prerequisites) {
		inNode[after] += 1;
		graph[before][after] = 1;
	}
	let count = 0;
	let result = [];
	let Q = inNode
		.map((v, i) => [v, i])
		.filter((a) => a[0] === 0)
		.map((a) => a[1]);

	while (Q.length > 0) {
		if (count >= numCourses) return [];
		let now = Q.shift();
		let goals = graph[now]
			.map((v, i) => [v, i])
			.filter((a) => a[0] === 1)
			.map((a) => a[1]);
		for (let goal of goals) {
			inNode[goal] -= 1;
			if (inNode[goal] === 0) Q.push(goal);
			graph[now][goal] = 0;
		}
		count++;
		result.push(now);
	}

	return result;
};

/** 4853 4795
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
	let inNode = Array.from({ length: numCourses }, () => 0);
	let graph = Array.from({ length: numCourses }, () => []);
	let visited = new Array(numCourses).fill(false);

	for (let [after, before] of prerequisites) {
		inNode[after] += 1;
		graph[before].push(after);
	}

	let result = [];

	for (let i = 0; i < numCourses; i++) {
		if (inNode[i] === 0 && !visited[i]) DFS(i);
	}

	return result.length === numCourses ? result : [];

	function DFS(node) {
		result.push(node);
		visited[node] = true;
		for (let next of graph[node]) {
			inNode[next]--;
			if (inNode[next] === 0 && !visited[next]) DFS(next);
		}
	}
};
