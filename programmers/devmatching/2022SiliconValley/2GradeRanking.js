function solution(names, homes, grades) {
	if (names.length === 1) return [1];

	function gradeSorting(a, b) {
		if (a[3] === b[3]) {
			if (a[2] === b[2]) {
				let aName = a[1];
				let bName = b[1];
				let min = Math.min(aName.length, bName.length);
				for (let i = 0; i < min; i++) {
					if (aName.charCodeAt(i) !== bName.charCodeAt(i))
						return aName.charCodeAt(i) - bName.charCodeAt(i);
				}
				return aName.length === min ? -1 : 1;
			} else {
				return b[2] - a[2];
			}
		} else {
			return b[3] - a[3];
		}
	}

	let table = [];
	for (let i = 0; i < names.length; i++) {
		let dist = homes[i][0] * homes[i][0] + homes[i][1] * homes[i][1];
		table.push([i + 1, names[i], dist, parseInt(grades[i])]);
	}

	table.sort(gradeSorting);

	for (let i = 0; i < table.length; i++) {
		table[i].push(i + 1);
	}

	table.sort((a, b) => a[0] - b[0]);
	return table.map((tab) => tab[4]);
}
