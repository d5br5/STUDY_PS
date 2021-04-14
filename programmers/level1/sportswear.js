function solution(n, lost, reserve) {
    let have = [];
    reserve.forEach((elem) => {
        if (lost.includes(elem)) have.push(elem);
    });


    have.forEach((elem) => {
        lost.splice(lost.indexOf(elem), 1);
        reserve.splice(reserve.indexOf(elem), 1);

    });

    reserve.forEach((elem) => {
        if (lost.includes(elem - 1)) {
            lost.splice(lost.indexOf(elem - 1), 1);
            reserve.splice(reserve.indexOf(elem), 1);
        } else if (lost.includes(elem + 1)) {
            lost.splice(lost.indexOf(elem + 1), 1);
            reserve.splice(reserve.indexOf(elem), 1);
        }
    });
    return [lost, reserve];
}


console.log(solution(5, [1, 2, 3, 4, 5, 10, 11, 12, 13], [3, 4, 5, 6, 9, 10, 11, 12, 13]));




function solution2(n, lost, reserve) {
    return n - lost.filter(a => {
        const b = reserve.find(r => Math.abs(r - a) <= 1)
        if (!b) return true
        reserve = reserve.filter(r => r !== b)
    }).length
}