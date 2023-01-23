function sortByPriceAscending(jsonString) {
	let parsed = JSON.parse(jsonString);
	let sorted = parsed.sort((a, b) =>
		a.price !== b.price ? a.price - b.price : a.name.localeCompare(b.name)
	);
	return JSON.stringify(sorted);
}

/*
function sortByPriceAscending(jsonString) {
  return JSON.stringify(JSON.parse(jsonString).sort((a,b) => a.price !== b.price ? a.price-b.price : a.name.localeCompare(b.name)))
}
*/

console.log(
	sortByPriceAscending(
		'[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'
	)
);
