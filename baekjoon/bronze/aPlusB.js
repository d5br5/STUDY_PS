let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = BigInt(input[0]);
let b = BigInt(input[1]);

// let a = 1000;
// let b = 100;


let c = a % b;
let whole = a - c;

console.log(whole / b);
console.log(c);