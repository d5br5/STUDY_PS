/** 9555 2572
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
	if (stones.length === 1) return stones[0];
	while (stones.length > 1) {
		let sorted = stones.sort((a, b) => b - a);
		stones = sorted.slice(2);
		if (sorted[0] !== sorted[1]) {
			stones.push(sorted[0] - sorted[1]);
		}
	}
	return stones.length === 1 ? stones[0] : 0;
};
