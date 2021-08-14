function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    let max = 51;

    function repeat(word, route, count) {
        let filtered = words.filter(a => canDo(word, a) && !route.includes(a));
        console.log(filtered);
        if (filtered.includes(target)) {
            return count + 1;
        } else if (filtered.length === 0) {
            return max;
        } else {
            return repeat(filtered[0], [...route, filtered[0]], count + 1)
        }
    }

    return repeat(begin, [], 0)
}

function canDo(str1, str2) {
    let diff = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diff++;
        if (diff > 1) return false;
    }
    return diff === 1;
}