function solution(n, weak, dist) {
	dist.reverse();
	let min = 1000;

	function DFS(start, places, people) {
		let right = (start + people[0]) % n;
		let nextPeople = people.slice(1);
		let togo;
		if (right > start) {
			togo = places.filter((a) => a < start || a > right);
		} else {
			togo = places.filter((a) => a < start && a > right);
		}

		if (togo.length === 0) {
			let result = dist.length - nextPeople.length;
			if (result < min) min = result;
			return;
		} else if (nextPeople.length !== 0) {
			for (let i = 0; i < togo.length; i++) {
				let nextStart = togo[i];
				DFS(
					nextStart,
					togo.filter((a) => a !== nextStart),
					nextPeople
				);
			}
		}
	}

	for (let i = 0; i < weak.length; i++) {
		let start = weak[i];
		DFS(
			start,
			weak.filter((a) => a !== start),
			dist
		);
	}

	return min === 1000 ? -1 : min;
}
