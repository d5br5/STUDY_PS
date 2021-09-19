function solution(id_list, report, k) {
	let reportFilter = Array.from(new Set(report));
	let total = {};
	for (let i = 0; i < id_list.length; i++) {
		total[id_list[i]] = [i, id_list[i], []];
	}

	let reported = {};

	for (let i = 0; i < reportFilter.length; i++) {
		let [from, to] = reportFilter[i].split(" ");
		total[from][2].push(to);
		if (reported[to]) {
			reported[to] += 1;
		} else {
			reported[to] = 1;
		}
	}
	// console.log(total)
	// console.log(reported)

	let values = Object.values(total);
	// console.log(values)
	let result = values.map((a) => {
		let whom = a[2];
		let count = whom.filter((b) => reported[b] >= k).length;
		return count;
	});
	// console.log(result)
	return result;
}
