function solution(tickets) {
	let solutions = [];
	function DFS(start, route, used) {
		if (used.length === tickets.length) {
			solutions.push(route);
			return;
		}
		for (let i = 0; i < tickets.length; i++) {
			if (!used.includes(i) && tickets[start][1] === tickets[i][0]) {
				DFS(i, [...route, tickets[i][1]], [...used, i]);
			}
		}
	}
	for (let i = 0; i < tickets.length; i++) {
		if (tickets[i][0] === "ICN") DFS(i, ["ICN", tickets[i][1]], [i]);
	}
	return solutions.sort()[0];
	//return solutions.sort(solSort)[0];
}

function solSort(a, b) {
	for (let i = 0; i < a.length; i++) {
		if (a[i].localeCompare(b[i]) === 0) {
			continue;
		} else if (a[i].localeCompare(b[i]) < 0) {
			return -1;
		} else {
			return 1;
		}
	}
}
