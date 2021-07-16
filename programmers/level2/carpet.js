function solution(brown, yellow) {
    let total = brown + yellow;
    let mod = [];
    let point = Math.ceil(Math.sqrt(total));
    for (let i = 1; i <= point; i++) {
        if (total % i === 0) {
            let mod1 = [total / i, i]
            mod.push(mod1)
        }
    }
    for (let i = 0; i < mod.length; i++) {
        let inner = [mod[i][0] - 2, mod[i][1] - 2];
        if (inner[0] * inner[1] === yellow) return mod[i]
    }
}