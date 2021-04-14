/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    app = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    len = s.length;
    arr = [];
    sum = 0;

    for (i = 0; i < len; i++) {
        arr[i] = s.slice(i, i + 1)
    }

    for (i = 0; i < len - 1; i++) {
        if (app[arr[i]] < app[arr[i + 1]]) {
            sum -= app[arr[i]];
        } else {
            sum += app[arr[i]];
        }

    }
    sum += app[arr[len - 1]];

    return sum;
};

romanToInt("MCMXCIV");