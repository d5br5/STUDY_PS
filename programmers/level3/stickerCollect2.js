function solution(sticker) {
    let last = sticker.length - 1;
    let res = [];

    function add(start, index, result) {
        if (start === 0) {
            if (index === last) return;
            if (index === last - 1 || index === last - 2) {
                res.push(result + sticker[index]);
                return
            }
            add(start, index + 2, result + sticker[index]);
            add(start, index + 3, result + sticker[index]);
        } else if (start === 1) {
            if (index >= last - 1) {
                res.push(result + sticker[index]);
                return;
            }
            if (index <= last - 3) {
                add(start, index + 2, result + sticker[index]);
                add(start, index + 3, result + sticker[index]);
            } else {
                add(start, index + 2, result + sticker[index]);
            }

        }
    }

    add(0, 0, 0);
    add(1, 1, 0);

    return (Math.max(...res))

}

function solution2(sticker) {
    if (sticker.length === 1) return sticker[0];
    if (sticker.length === 2 || sticker.length === 3) return Math.max(...sticker);
    if (sticker.length === 4) return Math.max(sticker[0] + sticker[2], sticker[1] + sticker[3]);

    let origin1 = [...sticker];
    origin1[2] += origin1[0];
    origin1[3] += origin1[0];
    origin1[4] += origin1[2];
    for (let i = 5; i < sticker.length - 1; i++) {
        let target = Math.max(origin1[i - 2], origin1[i - 3]);
        origin1[i] += target;
    }

    let origin2 = [...sticker];
    origin2[3] += origin2[1];
    origin2[4] += origin2[1];
    if (sticker.length >= 6) origin2[5] += origin2[3];
    for (let i = 6; i < sticker.length; i++) {
        let target = Math.max(origin2[i - 2], origin2[i - 3]);
        origin2[i] += target;
    }

    let len = sticker.length
    return Math.max(origin1[len - 2], origin1[len - 3], origin1[len - 4], origin2[len - 1], origin2[len - 2], origin2[len - 3])
}

function solution3(sticker) {
    const len = sticker.length + 2;
    const dp1 = new Array(len).fill(0);
    const dp2 = new Array(len).fill(0);

    if (sticker.length === 1) return sticker[0];

    for (let i = 2; i < len - 1; i++)
        dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i - 2]);

    for (let i = 3; i < len; i++)
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i - 2]);

    return Math.max(dp1[len - 2], dp2[len - 1]);
}