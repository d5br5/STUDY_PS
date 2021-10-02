function isPrime(num) {
    let start = 2;
    while (start <= Math.sqrt(num)) {
        if (num % start++ < 1) {
            return false;
        }
    }
    return num > 1;

}

function isPrime(num) {
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    if (num === 1) return false;
    if (num === 3) return true;
    if (num === 5) return true;
    if (num === 7) return true;

    let point = Math.floor(Math.sqrt(num));

    for (let i = 3; i <= point; i = i + 2) {
        if (num % i === 0) return false
    }
    return true;
}