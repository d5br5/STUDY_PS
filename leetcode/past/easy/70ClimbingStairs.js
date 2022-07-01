/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    first = 1;
    second = 2;

    if (n == 1) {
        return first;

    } else if (n == 2) {
        return second;
    }

    answer = 0;
    for (i = 0; i < n - 2; i++) {
        answer = first + second;
        first = second;
        second = answer;
    }
    return answer;

};