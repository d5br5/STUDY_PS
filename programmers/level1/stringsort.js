function solution(strings, n) {

    strings.sort((a, b) => {
        if (a[n] != b[n]) {
            a[n] > b[n]
            console.log(1);
        } else {
            a > b
        }

    })
    return strings;
}

console.log(solution(["abce", "abcd", "cdx"], 1));