let zerocount = 0;
let onecount = 0;

function fibo(n) {
    let z1 = 1;
    let o1 = 0;

    let z2 = 0;
    let o2 = 1;

    let res1;
    let res2;


    if (n == 0) {
        res1 = 1;
        res2 = 0;
    } else if (n == 1) {
        res1 = 0;
        res2 = 1;
    } else {
        for (let i = 0; i < n - 1; i++) {
            res1 = z1 + z2;
            res2 = o1 + o2;
            z1 = z2;
            o1 = o2;
            z2 = res1;
            o2 = res2;
        }
    }

    let resstr = res1 + " " + res2;
    return resstr;

}


console.log(fibo(4));
// for (let i = 0; i < 10; i++) {
//     console.log(zer);
// }