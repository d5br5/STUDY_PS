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
                break;
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
    console.log(lens);
    comm = strs[minIndex];

    i = 0;
    while (i < strs.length) {
        console.log(i);
        console.log(strs.length);

        comm = compare(strs[i], comm);
        console.log(33333333);
        console.log(comm + 3);

        i++;
    }


    console.log(comm);

};

longestCommonPrefix(["dogessdd", "dogecar", "dogssdd"]);