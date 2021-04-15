// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split(' ');
// var a = parseInt(input[0]);

var a = parseInt(216);

var breakpoint = 0;

for (let i = parseInt(a / 100); i < a; i++) {
    if (convert(i) == a) {
        breakpoint = i;
        break;
    }

}

function convert(a) {
    let str = String(a).split("");
    let res = 0;
    str.forEach(e => { res = res + parseInt(e) });
    res += a;
    return res;
}


console.log(breakpoint);