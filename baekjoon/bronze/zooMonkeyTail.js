let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

// let a = 9;
// let b = 35;

// let ver1 = a % 4;
// let hor1 = parseInt(a / 4);
// let ver2 = b % 4;
// let hor2 = parseInt(b / 4);

let dis1 = a % 4 > b % 4 ? a % 4 - b % 4 : b % 4 - a % 4;
let dis2 = parseInt(a / 4) > parseInt(b / 4) ? parseInt(a / 4) - parseInt(b / 4) : parseInt(b / 4) - parseInt(a / 4);

console.log(dis1 + dis2);