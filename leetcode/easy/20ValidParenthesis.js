/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // (){}[]
    arr = [];
    left = ['(', '{', '['];
    right = [')', '}', ']'];

    for (i = 0; i < s.length; i++) {
        arr[i] = s.slice(i, i + 1);
    }

    for (i = 0; i < arr.length; i++) {
        if (right.indexOf(arr[i]) != -1) {
            if (left[right.indexOf(arr[i])] == arr[i - 1]) {
                arr.splice(i - 1, 2);
                i = i - 2;
            } else {
                return false;
            }
        }
    }

    if (arr.length == 0) {
        return true;
    } else {
        return false;
    }


};

console.log(isValid("{}{}{}}{}()()()[][][]"));