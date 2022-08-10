"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
	inputString += inputStdin;
});

process.stdin.on("end", function () {
	inputString = inputString.split("\n");

	main();
});

function readLine() {
	return inputString[currentLine++];
}

/*
 * Complete the 'getMaxElementIndexes' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY rotate
 */

function getMaxElementIndexes(a, rotate) {
	// Write your code here
	let high = 0;
	let max = 0;
	let len = a.length;

	for (let i = 0; i < len; i++) {
		if (a[i] > max) {
			high = i;
			max = a[i];
		}
	}

	return rotate.map((r) => {
		if (high - r >= 0) {
			return high - r;
		} else {
			let result = high - r;
			while (result < 0) {
				result += len;
			}
			return result;
		}
	});
}
function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

	const aCount = parseInt(readLine().trim(), 10);

	let a = [];

	for (let i = 0; i < aCount; i++) {
		const aItem = parseInt(readLine().trim(), 10);
		a.push(aItem);
	}

	const rotateCount = parseInt(readLine().trim(), 10);

	let rotate = [];

	for (let i = 0; i < rotateCount; i++) {
		const rotateItem = parseInt(readLine().trim(), 10);
		rotate.push(rotateItem);
	}

	const result = getMaxElementIndexes(a, rotate);

	ws.write(result.join("\n") + "\n");

	ws.end();
}
