function solution(board, moves) {
    var basket = [];
    let count = 0;
    let tmp = 0;

    let con = [];
    for (let i = 0; i < board.length; i++) {
        con.push([]);
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            con[i][j] = board[board.length - 1 - j][i]
        }
    }

    board = con;

    for (let i = 0; i < board.length; i++) {
        for (let j = board.length - 1; j >= 0; j--) {
            if (board[i][j] == 0) board[i].pop();
        }
    }
    console.log(board);

    for (let i = 0; i < moves.length; i++) {
        tmp = board[moves[i] - 1].pop();
        if (tmp == 0 || tmp == undefined) {
            continue;
        } else {
            basket.push(tmp);
        }
        console.log(basket);
        if (basket.length >= 2 && basket[basket.length - 1] == basket[basket.length - 2]) {
            basket.pop();
            basket.pop();
            count += 2;
        }
    }

    return count;
}

console.log(solution([
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
], [1, 5, 3, 5, 1, 2, 1, 4]))