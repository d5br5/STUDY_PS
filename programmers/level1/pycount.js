function solution(s) {
    var parr = [];
    var yarr = [];
    var res = s.split("");
    res.forEach(e => {
        if (e == 'p' || e == 'P') parr.push(e);
        if (e == 'Y' || e == 'y') yarr.push(e);
    })

    return parr.length == yarr.length ? true : false
}