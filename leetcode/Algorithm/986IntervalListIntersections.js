/** 1142 0532
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
	let i = 0,
		j = 0;
	const answer = [];
	while (i < firstList.length && j < secondList.length) {
		let [f1, f2] = firstList[i];
		let [s1, s2] = secondList[j];
		if (f1 === s1) {
			answer.push([f1, Math.min(f2, s2)]);
		} else if (f1 < s1) {
			if (f2 < s1) {
				i++;
				continue;
			} else {
				answer.push([s1, Math.min(f2, s2)]);
			}
		} else {
			if (s2 < f1) {
				j++;
				continue;
			} else {
				answer.push([f1, Math.min(f2, s2)]);
			}
		}
		if (f2 >= s2) j++;
		if (f2 <= s2) i++;
	}
	return answer;
};

/** 3803 0610
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
	let i = 0,
		j = 0;
	const answer = [];
	while (i < firstList.length && j < secondList.length) {
		let [f1, f2] = firstList[i];
		let [s1, s2] = secondList[j];
		let low = Math.max(f1, s1);
		let high = Math.min(f2, s2);
		if (low <= high) {
			answer.push([low, high]);
		}
		if (f2 <= s2) i++;
		if (f2 >= s2) j++;
	}
	return answer;
};

/** 8169 8748
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
	let i = 0,
		j = 0;
	const answer = [];
	while (i < firstList.length && j < secondList.length) {
		let low = Math.max(firstList[i][0], secondList[j][0]);
		let high = Math.min(firstList[i][1], secondList[j][1]);
		if (low <= high) {
			answer.push([low, high]);
		}
		let [a, b] = [firstList[i][1], secondList[j][1]];
		if (a <= b) i++;
		if (a >= b) j++;
	}
	return answer;
};
