/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    sum = 0;
    while (num > 9) {
        while (num > 0) {
            sum += num % 10;
            num = parseInt(num / 10);
        }
        num = sum;
        sum = 0;
    }
    return num;
};

console.log(addDigits(57));