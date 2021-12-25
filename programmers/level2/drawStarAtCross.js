function solution(line) {
	let coords = getcoords(line);
	if (coords.length === 1) return ["*"];
	let [[xsize, ysize], ad] = adjustCoords(coords);
	const arr = Array.from({length: ysize}, (v, i) =>
		Array.from({length: xsize}, (cc, index) => ".")
	);
	for (let i = 0; i < ad.length; i++) {
		arr[ysize - ad[i][1] - 1][ad[i][0]] = "*";
	}
	return arr.map((a) => a.join(""));
}

function getcoords(line) {
	let result = [];
	for (let i = 0; i < line.length; i++) {
		for (let j = 1; j < line.length; j++) {
			let [A, B, E] = line[i];
			let [C, D, F] = line[j];
			if (A * D === B * C) continue;
			let x = (B * F - E * D) / (A * D - B * C);
			if (!Number.isInteger(x)) continue;
			let y = (E * C - A * F) / (A * D - B * C);
			if (!Number.isInteger(y)) continue;
			let str = x + "," + y;
			if (!result.includes(str)) result.push(str);
		}
	}
	return result.map((a) => {
		let [x, y] = a.split(",");
		return [parseInt(x), parseInt(y)];
	});
}

function adjustCoords(coords) {
	let xs = coords.map((a) => a[0]);
	let ys = coords.map((a) => a[1]);
	let xmin = Math.min(...xs);
	let ymin = Math.min(...ys);
	let xmax = Math.max(...xs);
	let ymax = Math.max(...ys);
	let result = coords.map((a) => [a[0] - xmin, a[1] - ymin]);
	return [[xmax - xmin + 1, ymax - ymin + 1], result];
}
