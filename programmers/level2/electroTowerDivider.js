function solution(n, wires) {
	let result = wires.map((a, i) =>
		getGap(wires.filter((b, index) => i !== index))
	);
	return Math.min(...result);
}

function getGap(wires) {
	let first = new Set();
	first.add(wires[0][0]).add(wires[0][1]);
	let ftrue = wires.filter((a) => first.has(a[0]) || first.has(a[1]));
	let ffalse = wires.filter((a) => !first.has(a[0]) && !first.has(a[1]));
	while (ftrue.length > 0) {
		for (let i = 0; i < ftrue.length; i++) {
			first.add(ftrue[i][0]).add(ftrue[i][1]);
		}
		ftrue = ffalse.filter((a) => first.has(a[0]) || first.has(a[1]));
		ffalse = ffalse.filter((a) => !first.has(a[0]) && !first.has(a[1]));
	}
	let second = new Set(ffalse.flat());
	if (second.size === 0) return first.size - 1;
	return Math.abs(first.size - second.size);
}
