function solution(n, k) {
	let converted = n.toString(k);
	let splited = converted.split("0").filter((a) => a !== "");
	let filtered = splited.filter((a) => isPrime(parseInt(a)));
	return filtered.length;
}

function isPrime(n) {
	if (n == 1) return false;
	if (n == 2) return true;
	if (n % 2 == 0) return false;
	let root = Math.floor(Math.sqrt(n));
	for (let i = 3; i <= root; i++) {
		if (n % i == 0) return false;
	}
	return true;
}
