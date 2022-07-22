/** 9229 8595
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (prices.length === 0) return 0;
	let profit = 0;
	let buy = prices[0];
	let sell = prices[0];
	for (let i = 1; i < prices.length; i++) {
		let price = prices[i];
		if (price >= buy) {
			if (price > sell) sell = price;
		} else {
			if (profit < sell - buy) profit = sell - buy;
			buy = price;
			sell = price;
		}
	}
	if (profit < sell - buy) profit = sell - buy;
	return profit;
};

/** 8665 0941
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	if (prices.length === 0) return 0;
	let profit = 0;
	let min = 10000;
	for (let price of prices) {
		if (price < min) {
			min = price;
		} else if (price - min > profit) {
			profit = price - min;
		}
	}
	return profit;
};
