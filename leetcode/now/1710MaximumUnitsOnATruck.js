/** 9716 6347
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
	boxTypes.sort((a, b) => b[1] - a[1]);
	let sum = 0;
	for (let i = 0; i < boxTypes.length; i++) {
		let [a, b] = boxTypes[i];
		if (a <= truckSize) {
			sum += a * b;
			truckSize -= a;
		} else {
			return sum + truckSize * b;
		}
	}
	return sum;
};
