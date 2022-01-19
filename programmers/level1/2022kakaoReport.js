function solution(id_list, report, k) {
	const reportmap = new Map();
	const frommap = new Map();

	for (let i = 0; i < report.length; i++) {
		const [from, to] = report[i].split(" ");
		if (reportmap.has(from)) {
			if (!reportmap.get(from).has(to)) {
				reportmap.get(from).add(to);
			} else {
				continue;
			}
		} else {
			let newset = new Set();
			newset.add(to);
			reportmap.set(from, newset);
		}
		frommap.get(to) ? frommap.set(to, frommap.get(to) + 1) : frommap.set(to, 1);
	}

	return id_list.map((id) =>
		reportmap.get(id)
			? [...reportmap.get(id).values()].filter((a) => frommap.get(a) >= k)
					.length
			: 0
	);
}

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

	let values = Object.values(total);
	let result = values.map((a) => {
		let whom = a[2];
		let count = whom.filter((b) => reported[b] >= k).length;
		return count;
	});
	return result;
}
