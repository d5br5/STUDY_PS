function solution1(n, weak, dist) {
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

function solution2(n, weak, dist) {
	let min = 20;
	for (let i = 1; i <= dist.length; i++) {
		let perm = Perms(dist, i);
		for (let j = 0; j < perm.length; j++) {
			if (done(weak, perm[j], n)) return i;
		}
	}
	return -1;
}

function done(weak, people, n) {
	let comparison = [];
	for (let i = 0; i < weak.length; i++) {
		let now = [];
		for (let j = 0; j < weak.length; j++) {
			if (i + j >= weak.length) {
				now.push(weak[(i + j) % weak.length] + n);
			} else {
				now.push(weak[i + j]);
			}
		}
		comparison.push(now);
	}

	for (let i = 0; i < comparison.length; i++) {
		let now = comparison[i];
		for (let j = 0; j < people.length; j++) {
			now = now.filter((a) => a > now[0] + people[j]);
			if (now.length === 0) return true;
		}
	}

	return false;
}
function Perms(arr, num) {
	let result = [];
	function DFS(count, start, indexes) {
		if (count === num) {
			result.push(start);
			return;
		}
		for (let i = 0; i < arr.length; i++) {
			if (!indexes.includes(i))
				DFS(count + 1, [...start, arr[i]], [...indexes, i]);
		}
	}

	for (let i = 0; i < arr.length; i++) {
		DFS(1, [arr[i]], [i]);
	}
	return result;
}
