import {
	getScore,
	getWaiting,
	getResult,
	getUserInfo,
	doMatch,
	changeGrade,
} from "./api.js";

const key = "21b408d9-800b-4cd9-b26b-b482cfdd3272";
const defaultGrade = 4300;
let now = 0;
// const resultTable = [];

// for (let i = 0; i < 30; i++) {
// 	resultTable.push({id: i + 1, win: [], lose: [], strwin: 0, strlose: 0});
// }

const createMatchPairs = (waiting_line, user_info, now) => {
	let maxwait = 0;
	for (let i = 0; i < waiting_line.length; i++) {
		let delayed = now - waiting_line[i].from;
		if (maxwait < delayed) maxwait = delayed;
	}

	if (waiting_line.length === 0) {
		return [];
	} else if (waiting_line.length <= 2) {
		if (maxwait < 3) return [];
	}
	// else if (waiting_line.length <= 6) {
	// 	if (maxwait < 6) return [];
	// }

	const waitingSort = (a, b) => {
		const gradeA = user_info[a.id - 1].grade;
		const gradeB = user_info[b.id - 1].grade;
		if (gradeA > gradeB) {
			return -1;
		} else if (gradeA === gradeB) {
			return 0;
		} else {
			return 1;
		}
	};
	const sorted = waiting_line.sort(waitingSort);
	let resultA = [];
	let len = sorted.length;
	for (let i = 0; i < len - 1; i = i + 2) {
		resultA.push([sorted[i].id, sorted[i + 1].id]);
	}
	return resultA;
};

const getPower = (me, you, win) => {
	let point = 0;
	let realyou = you;
	if (you === 0) realyou = defaultGrade;
	if (win) {
		if (me > realyou) {
			point = (1 - (me - realyou) / 3500) * 290 + 10;
		} else {
			point = ((realyou - me) / 3500) * 450 + 100;
		}
	} else {
		if (me > realyou) {
			point = ((me - realyou) / 3500) * 250 + 50;
		} else {
			point = (1 - (realyou - me) / 3500) * 90 + 50;
		}
	}

	return point;
};

const createGradeCommands = (gameResult, userInfo) => {
	let commands = [];
	for (let i = 0; i < gameResult.length; i++) {
		const {taken, win, lose} = gameResult[i];
		// resultTable[win - 1].win.push({with: lose, taken});
		// resultTable[win - 1].strwin += 1;
		// resultTable[win - 1].strlose = 0;
		// resultTable[lose - 1].lose.push({with: win, taken});
		// resultTable[lose - 1].strwin = 0;
		// resultTable[lose - 1].strlose += 1;

		const winnerGradeBefore = userInfo[win - 1].grade;
		const loserGradeBefore = userInfo[lose - 1].grade;
		let winnerGradeAfter;
		let loserGradeAfter;

		if (winnerGradeBefore === 0) {
			if (taken <= 10) {
				winnerGradeAfter = 6000;
			} else if (taken <= 20) {
				winnerGradeAfter = 6500;
			} else if (taken <= 30) {
				winnerGradeAfter = 5500;
			} else {
				winnerGradeAfter = 5000;
			}
		} else {
			winnerGradeAfter =
				winnerGradeBefore + getPower(winnerGradeBefore, loserGradeBefore, true);
			if (winnerGradeAfter > 9600) winnerGradeAfter = 9600;
		}
		if (loserGradeBefore === 0) {
			if (taken <= 10) {
				loserGradeAfter = 2500;
			} else if (taken <= 20) {
				loserGradeAfter = 3000;
			} else if (taken <= 30) {
				loserGradeAfter = 3500;
			} else {
				loserGradeAfter = 4000;
			}
		} else {
			loserGradeAfter =
				loserGradeBefore - getPower(loserGradeBefore, winnerGradeBefore, false);
			if (loserGradeAfter < 0) loserGradeAfter = 0;
		}

		commands.push({id: win, grade: winnerGradeAfter});
		commands.push({id: lose, grade: loserGradeAfter});
	}
	return commands;
};

while (now <= 595) {
	const {user_info} = await getUserInfo(key);
	if (now === 594) console.log(user_info);

	const {waiting_line} = await getWaiting(key);
	// console.log("before", waiting_line);

	const matchPairs = createMatchPairs(waiting_line, user_info, now);
	// console.log("pairs", matchPairs);

	let matchData = await doMatch(key, matchPairs);
	// const matchData = await doMatch(key, []);
	// console.log("matchData", matchData);
	if (now === 595) break;
	now = matchData.time;
	console.log(now);

	const {game_result} = await getResult(key);
	// console.log("gameResult", game_result);

	if (game_result.length > 0) {
		const gradeCommands = createGradeCommands(game_result, user_info);
		// console.log("gradeComs", gradeCommands);
		changeGrade(key, gradeCommands);
	}
}

const score = await getScore(key);
console.log(score);

// const waitingListAfter = await getWaiting(key);
// console.log("after", waitingListAfter);
