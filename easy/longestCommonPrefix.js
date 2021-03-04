/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    var compare = function(st1, st2) {
        rep = Math.min(st1.length, st2.length);

        common = '';
        for (i = 0; i < rep; i++) {

            if (st1.slice(i, i + 1) == st2.slice(i, i + 1)) {
                pre = st1.slice(i, i + 1);
                common = common.concat(pre);

            } else {
                return common;
            }
        }
        return common;
    }

    lens = [];
    min = 200;
    minIndex = 0;
    for (i = 0; i < strs.length; i++) {
        lens[i] = strs[i].length;
        if (min > lens[i]) {
            min = lens[i];
            minIndex = i;
        }
    }
    if (lens.length == 0) {
        return "";
    }
    comm = strs[minIndex];

    j = 0;
    while (j < strs.length) {
        comm = compare(strs[j], comm);
        j++;
    }

    return comm;
};

longestCommonPrefix(["dogessdd", "dogecar", "dogssdd"]);