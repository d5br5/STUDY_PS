function solution(info, query) {
	let result = [];
	let parseInfo = info.map((a) => a.split(" "));
	for (let i = 0; i < query.length; i++) {
		let nowQ = query[i].split(" ").filter((a) => a !== "and");
		let search = [...parseInfo];
		for (let j = 0; j < nowQ.length; j++) {
			if (nowQ[j] === "-") continue;
			if (j === nowQ.length - 1) {
				search = search.filter((a) => a[j] >= nowQ[j]);
				break;
			}
			search = search.filter((a) => a[j] === nowQ[j]);
		}
		result.push(search.length);
	}
	return result;
}
