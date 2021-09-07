function solution(money) {
	let max1 = [0, money[1], money[2]];
	let max2 = [money[0], 0];

	for (let i = 3; i < money.length; i++) {
		max1[i] = money[i] + Math.max(max1[i - 2], max1[i - 3]);
	}

	max2[2] = money[2] + money[0];
	for (let i = 3; i < money.length - 1; i++) {
		max2[i] = money[i] + Math.max(max2[i - 2], max2[i - 3]);
	}

	return Math.max(
		max1[max1.length - 1],
		max1[max1.length - 2],
		max2[max2.length - 1],
		max2[max2.length - 2]
	);
}

const money = [1, 2, 3, 1];

console.log(solution(money));
