const goal = 4;
let tmp = [];

function solution(depth) {
	if (depth >= goal) {
		let str = "";
		for (let i = 0; i < depth; i++) {
			str += tmp[i] + " ";
		}
		console.log(str);
		return;
	}
	for (let i = 0; i < 5; i++) {
		tmp[depth] = i;
		solution(depth + 1);
	}
}

solution(0);
