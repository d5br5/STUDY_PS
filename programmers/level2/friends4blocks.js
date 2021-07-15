function solution(m, n, board) {
    let count = 0;
    let reboard = [];
    for (let i = 0; i < board[0].length; i++) {
        let tmp = [];
        for (let j = 0; j < board.length; j++) {
            tmp.push(board[j][i]);
        }
        reboard.push(tmp.reverse());
    }
    let check = checking(reboard);

    while (isInTrue(check)) {
        let tmp = [];
        for (let i = 0; i < reboard.length; i++) {
            let tmptmp = [];
            for (let j = 0; j < reboard[i].length; j++) {
                if (!check[i][j]) tmptmp.push(reboard[i][j]);
                else count++;
            }
            tmp.push(tmptmp);
        }
        reboard = tmp;
        check = checking(reboard);
    }
    return count;
}

function checking(array) {
    let checked = [];
    for (let i = 0; i < array.length; i++) {
        let tmp = [];
        for (let j = 0; j < array[i].length; j++) {
            if (i < array.length - 1 && j < array[i].length - 1 && j < array[i + 1].length - 1) { // 우하단
                if (array[i][j] === array[i + 1][j] && array[i][j] === array[i][j + 1] && array[i][j] === array[i + 1][j + 1]) {
                    tmp.push(true);
                    continue;
                }
            }
            if (i < array.length - 1 && j < array[i + 1].length && 0 < j) { // 좌하단
                if (array[i][j] === array[i + 1][j] && array[i][j] === array[i][j - 1] && array[i][j] === array[i + 1][j - 1]) {
                    tmp.push(true);
                    continue;
                }
            }
            if (0 < i && j < array[i - 1].length && 0 < j) { // 좌상단
                if (array[i][j] === array[i - 1][j] && array[i][j] === array[i][j - 1] && array[i][j] === array[i - 1][j - 1]) {
                    tmp.push(true);
                    continue;
                }
            }
            if (0 < i && j < array[i - 1].length - 1 && j < array[i].length - 1) { // 우상단
                if (array[i][j] === array[i - 1][j] && array[i][j] === array[i][j + 1] && array[i][j] === array[i - 1][j + 1]) {
                    tmp.push(true);
                    continue;
                }
            }
            tmp.push(false);
        }
        checked.push(tmp);
    }
    return checked;
}

function isInTrue(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j]) return true;
        }
    }
    return false;
}