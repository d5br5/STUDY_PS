import * as API from "./api.js";

const { auth_key } = await API.start(2);

console.log(auth_key);

const defaultGrade = 4100;
let now = 0;

const createMatchPairs = (waiting_line, user_info, now) => {
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
			point = (1 - (me - realyou) / 3500) * 200 + 100;
		} else {
			point = ((realyou - me) / 3500) * 400 + 200;
		}
	} else {
		if (me > realyou) {
			point = ((me - realyou) / 3500) * 300 + 200;
		} else {
			point = (1 - (realyou - me) / 3500) * 100 + 100;
		}
	}

	return point;
};

const createGradeCommands = (gameResult, userInfo) => {
	let commands = [];
	for (let i = 0; i < gameResult.length; i++) {
		const { taken, win, lose } = gameResult[i];
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
				winnerGradeAfter = 6500;
			} else if (taken <= 20) {
				winnerGradeAfter = 6000;
			} else if (taken <= 30) {
				winnerGradeAfter = 5500;
			} else {
				winnerGradeAfter = 4500;
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

		commands.push({ id: win, grade: winnerGradeAfter });
		commands.push({ id: lose, grade: loserGradeAfter });
	}
	return commands;
};

while (now <= 595) {
	const { user_info } = await API.get(API.path.USER_INFO, auth_key);
	if (now === 594) console.log(user_info);

	const { waiting_line } = await API.get(API.path.WAITING_LINE, auth_key);

	const pairs = createMatchPairs(waiting_line, user_info, now);

	let matchData = await API.put(API.path.MATCH, { pairs }, auth_key);

	if (now === 595) break;
	now = matchData.time;
	console.log(now);

	const { game_result } = await API.get(API.path.GAME_RESULT, auth_key);

	if (game_result.length > 0) {
		const commands = createGradeCommands(game_result, user_info);
		// console.log("gradeComs", gradeCommands);
		await API.put(API.path.CHANGE_GRADE, { commands }, auth_key);
	}
}

const { score } = await API.get(API.path.SCORE, auth_key);

console.log(score);
