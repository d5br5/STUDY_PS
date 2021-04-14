/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    neg = 0;
    if (x < 0) {
        neg = 1;
        x = Math.abs(x);
    }
    str = x.toString();

    len = str.length;
    arr = [];
    for (i = 0; i < len; i++) {
        arr[i] = str.charAt(len - 1 - i);
    }


    realStr = '';
    for (i = 0; i < arr.length; i++) {
        realStr += arr[i]
    }

    num = parseInt(realStr);

    if (neg == 1) {
        num = num * -1
    }

    if (-1 * (2 ** 31) > num || 2 ** 31 - 1 < num) {
        return 0;
    } else {
        return num;
    }


};

var sol = function(x) {

    rev = 0;
    while (x != 0) {
        pop = x % 10;
        x = parseInt(x / 10);
        rev = rev * 10 + pop;
    }
    if (rev < -1 * 2 ** 31 || rev > 2 ** 31 - 1) { return 0; } else {
        return rev;
    }

}

sol(-23546);