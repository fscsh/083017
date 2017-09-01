function solveNQueens(n) {
    let board = [];
    for (let i = 0; i < n; i++) {
        board.push([]);
        for (let j = 0; j < n; j++) {
            board[i].push('.');
        }
    }
    let res = []
    helper(board, 0, res);
    for (let row = 0; row < res.length; row++) {
        // JSON.parse的作用是将JSON.stringify封装过的信息变回原形
        res[row] = res[row].map(JSON.parse);
    }
    for(let i in res){
        for(let j in res[i])
        res[i][j] = res[i][j].join('');
    }
    return res;
    // return board;
}

function helper(board, i, res) {
    // for (let i = 0; i < board.length; i++) {
    if (i === board.length) {
        // board现在是一个二维数组
        // .map的作用是遍历数组里面的每一个元素
        // JSON.stringify的作用是将遍历到的元素转成string
        return res.push(board.map(JSON.stringify));
    }

    for (let j = 0; j < board[0].length; j++) {
        // console.log('now i =', i, 'j =', j);
        if (board[i][j] === '.') {
            if (findQ(i, j, board)) {
                board[i][j] = 'Q';
                // console.log('board', board);
                helper(board, i + 1, res);
                board[i][j] = '.';

            }
        }
    }
    // console.log('return board', board);
    return res;
    // return res;
}

function findQ(i, j, board) {
    // 对上
    for (let row = i - 1; row >= 0; row--) {
        if (board[row][j] === 'Q') return false;
    }

    // 对左上
    for (let row = i - 1, col = j - 1; row >= 0 && col >= 0; row--, col--) {
        if (board[row][col] === 'Q') return false;
    }

    // 对右上
    for (let row = i - 1, col = j + 1; row >= 0 && col < board[0].length; row--, col++) {
        if (board[row][col] === 'Q') return false;
    }
    return true;
}


console.log(solveNQueens(4));
