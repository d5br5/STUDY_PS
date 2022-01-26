function solution(n, k) {
	return n
		.toString(k)
		.split("0")
		.filter((a) => isPrime(+a)).length;
}

function isPrime(n) {
	if (n === 1) return false;
	if (n === 2) return true;
	if (n % 2 === 0) return false;
	const root = Math.ceil(Math.sqrt(n));
	for (let i = 3; i <= root; i += 2) {
		if (n % i === 0) return false;
	}
	return true;
}
