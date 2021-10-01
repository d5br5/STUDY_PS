function solution(money) {
	let curr = [500, 100, 50, 10, 5, 1];
	let count = 0;
	for (let i = 0; i < curr.length; i++) {
		count += parseInt(money / curr[i]);
		money = money % curr[i];
	}
	console.log(count);
	return count;
}

solution(999);
