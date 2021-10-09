function solution(weights, head2head) {
	let pairs = [];

	for (let i = 0; i < weights.length; i++) {
		let winCount = head2head[i].split("").filter((a) => a === "W").length;
		let loseCount = head2head[i].split("").filter((a) => a === "L").length;
		let winRate = winCount / (winCount + loseCount);

		let weight = weights[i];
		let moreCount = 0;
		for (let j = 0; j < weights.length; j++) {
			if (weights[j] > weight && head2head[i][j] === "W") moreCount++;
		}

		pairs.push([winRate, moreCount, weight, i]);
	}
	pairs.sort(sortFn);
	return pairs.map((a) => a[3] + 1);
}

function sortFn(a, b) {
	if (a[0] > b[0]) {
		return -1;
	} else if (a[0] < b[0]) {
		return 1;
	} else {
		if (a[1] > b[1]) {
			return -1;
		} else if (a[1] < b[1]) {
			return 1;
		} else {
			if (a[2] > b[2]) {
				return -1;
			} else if (a[2] < b[2]) {
				return 1;
			} else {
				if (a[3] > b[3]) {
					return 1;
				} else if (a[3] < b[3]) {
					return -1;
				}
			}
		}
	}
}
