/** 9085 9067
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
	let secretIndex = Array.from({ length: 10 }, () => 0);
	let guessIndex = Array.from({ length: 10 }, () => 0);
	let bullIndex = Array.from({ length: 10 }, () => 0);

	for (let i = 0; i < secret.length; i++) {
		let s = parseInt(secret[i]);
		let g = parseInt(guess[i]);
		secretIndex[s]++;
		guessIndex[g]++;
		if (s === g) bullIndex[s]++;
	}

	let result = guessIndex.map((a, i) =>
		a > secretIndex[i] ? secretIndex[i] - bullIndex[i] : a - bullIndex[i]
	);

	let cow = result.reduce((prev, curr) => prev + curr, 0);
	let bull = bullIndex.reduce((prev, curr) => prev + curr, 0);

	return `${bull}A${cow}B`;
};
