function solution(n, plans, clients) {
	let result = [];

	let datas = [];
	let services = [];

	for (let i = 0; i < plans.length; i++) {
		let splited = plans[i].split(" ");
		datas.push(splited.shift());
		if (i === 0) {
			services.push(splited);
		} else {
			services.push([...services[i - 1], ...splited]);
		}
	}

	datas = datas.map((a) => parseInt(a));

	for (let i = 0; i < clients.length; i++) {
		let [data, ...wants] = clients[i].split(" ");
		data = parseInt(data);
		let ok = false;
		for (let j = 0; j < datas.length; j++) {
			if (data > datas[j]) continue;
			didBreak = false;
			for (let k = 0; k < wants.length; k++) {
				if (!services[j].includes(wants[k])) {
					didBreak = true;
					break;
				}
			}
			if (!didBreak) {
				ok = true;
				result.push(j + 1);
				break;
			}
		}
		if (!ok) result.push(0);
	}
	return result;
}
