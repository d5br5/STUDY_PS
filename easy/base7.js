/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num == 0) { return '0' }
    arr = [];
    count = 0;
    neg = 0;
    if (num < 0) {
        neg = 1;
        num *= -1;
    }
    while (num != 0) {
        hap = num % 7;
        arr[count] = hap;
        num = parseInt(num / 7);
        count += 1;
    }
    string = '';
    arr.forEach(element => string = element.toString() + string);


    if (neg == 1) {
        return '-' + string;
    } else {
        return string;
    }

};

console.log(convertToBase7(-8));