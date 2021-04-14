/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    arr = [];
    for (i = 0; i < 100; i++) {
        arr = n.toString().split('');
        sum = 0;
        for (j = 0; j < arr.length; j++) {
            sum = sum + parseInt(arr[j]) ** 2;
        }
        if (sum == 1) {
            return true;
        } else {
            n = sum;
        }

    }
    return false;

};

console.log(isHappy(19));