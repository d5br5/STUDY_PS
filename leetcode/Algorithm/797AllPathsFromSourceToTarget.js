/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
	let result = [];
	for (let i = 0; i < graph[0].length; i++) {
		DFS(graph[0][i], [0, graph[0][i]]);
	}

	return result;

	function DFS(i, arr) {
		if (arr[arr.length - 1] === graph.length - 1) result.push(arr);
		for (let j = 0; j < graph[i].length; j++) {
			DFS(graph[i][j], [...arr, graph[i][j]]);
		}
	}
};
