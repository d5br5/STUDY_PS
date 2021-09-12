function solution(n) {
	let count = 0;
	for (let i = 2; i <= n; i++) {
		if (isPrime(i)) count++;
	}
	return count;
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

function solution(n) {
	let answer = [];
	let count = 0;
	for (let i = 2; i <= n; i++) {
		answer[i] = i;
	}
	for (let i = 2; i <= n; i++) {
		if (answer[i] == 0) continue;
		for (let j = 2 * i; j <= n; j = j + i) {
			answer[j] = 0;
		}
	}
	for (let i = 2; i <= n; i++) {
		if (answer[i] != 0) count++;
	}

	return count;
}

function isPrime(n) {
	if (n <= 1) {
		return false;
	}
	let divisor = 2;
	while (n > divisor) {
		if (n % divisor === 0) {
			return false;
		}
		divisor++;
	}
	return true;
}

function isPrime(n) {
	if (n <= 1) {
		return false;
	}
	if (n === 2 || n === 3) {
		return true;
	}
	if (n % 2 === 0) {
		return false;
	}
	let divisor = 3;
	let limit = Math.sqrt(n);
	while (limit >= divisor) {
		if (n % divisor === 0) {
			return false;
		}
		divisor += 2;
	}
	return true;
}
