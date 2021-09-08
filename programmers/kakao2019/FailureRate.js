// 20m

function solution(N, stages) {
	let stage = [];
	for (let i = 1; i <= N; i++) {
		stage.push(i);
	}
	stage.sort((a, b) => failure(b, stages) - failure(a, stages));
	return stage;
}

function failure(stage, total) {
	let son = 0;
	let mom = 0;

	for (let i = 0; i < total.length; i++) {
		if (total[i] === stage) son++;
		if (total[i] >= stage) mom++;
	}
	if (son === 0) return 0;
	return son / mom;
}
