function solution(numbers) {
    let perms = permutations(numbers.split("").map(a => parseInt(a)));
    let answer = [];
    for (let i = 0; i < perms.length; i++) {
        if (perms[i][0] === '0') continue;
        let str = '';
        for (let j = 0; j < perms[i].length; j++) {
            str += perms[i][j];
            let strnum = parseInt(str);
            if (isPrime(strnum) && !answer.includes(strnum)) answer.push(strnum)
        }
    }
    return answer.length
}

function isPrime(num) {
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

function permutations(arr) {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
        (acc, item, i) =>
        acc.concat(
            permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
                item, ...val,
            ])
        ), []
    );
};