function solution(msg) {
    let res = [];
    let dic = {
        "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8,
        "I": 9, "J": 10, "K": 11, "L": 12, "M": 13, "N": 14, "O": 15,
        "P": 16, "Q": 17, "R": 18, "S": 19, "T": 20, "U": 21, "V": 22,
        "W": 23, "X": 24, "Y": 25, "Z": 26,
    }
    for (let i = 0; i < msg.length; i++) {
        for (let j = 1; j <= msg.length - i; j++) {
            let before = msg.slice(i, i + j - 1);
            let next = msg.slice(i, i + j);
            if (!dic[next]) {
                dic[next] = Object.keys(dic).length + 1;
                res.push(dic[before]);
                i = i + j - 2;
                break;
            } else {
                if (i + j === msg.length) {
                    res.push(dic[next]);
                    i = i + j
                    break;
                }
            }
        }
    }
    return res;
}