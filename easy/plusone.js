/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1;
    for (i = digits.length - 1; i > 0; i--) {
        if (digits[i] == 10) {
            digits[i] = 0;
            digits[i - 1] += 1;
        }
    }

    if (digits[0] == 10) {
        for (i = digits.length - 1; i > 0; i--) {
            digits[i + 1] = digits[i];
        }
        digits[1] = 0;
        digits[0] = 1;
    }

    return digits;
};