function solution(record) {
	let ids = {};
	let result = [];
	for (let i = 0; i < record.length; i++) {
		let [com, user, nick] = record[i].split(" ");
		if (com === "Enter" || com === "Change") {
			ids[user] = nick;
		}
	}
	for (let i = 0; i < record.length; i++) {
		let [com, user, nick] = record[i].split(" ");
		if (com === "Enter") {
			result.push(`${ids[user]}님이 들어왔습니다.`);
		} else if (com === "Leave") {
			result.push(`${ids[user]}님이 나갔습니다.`);
		}
	}
	return result;
}

// time 10minutes
