function solution(k, dungeons) {
	let order = DFSMaker(dungeons.length);
	let result = order.map((a) => After(k, dungeons, a));
	return Math.max(...result);
}

function DFSMaker(num) {
	let result = [];
	DFS([], num);
	function DFS(arr, count) {
		if (count === 0) result.push(arr);
		for (let i = 0; i < num; i++) {
			if (arr.includes(i)) continue;
			DFS([...arr, i], count - 1);
		}
	}
	return result;
}

function After(k, dungeons, route) {
	let count = 0;
	let tired = k;
	for (let i = 0; i < dungeons.length; i++) {
		let now = dungeons[route[i]];
		if (tired < now[0]) break;
		count++;
		tired -= now[1];
	}
	return count;
}
