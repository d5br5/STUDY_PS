/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) { return false; }
    origin = x;
    rev = 0;
    while (x != 0) {
        pop = x % 10;
        x = parseInt(x / 10);
        rev = rev * 10 + pop;
    }
    if (rev == origin) { return true; } else { return false; }
};

isPalindrome(-3131);