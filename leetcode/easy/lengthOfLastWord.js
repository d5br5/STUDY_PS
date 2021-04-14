/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    arr = s.split(' ');
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == '') {
            arr.splice(i, 1);
            i = i - 1;
        }
    }
    if (arr[arr.length - 1] == undefined) {
        return 0;
    }
    return arr[arr.length - 1].length;
};

lengthOfLastWord('           ');