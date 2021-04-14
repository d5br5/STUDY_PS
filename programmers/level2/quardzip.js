function solution(arr) {
    let result = [];

    function divfour(array) {
        let len = array.length;
        let start = array[0][0];
        if (len == 1) {
            result.push(array[0][0]);
            return;
        }

        let q1 = array[0][0];
        let q2 = array[0][len / 2];
        let q3 = array[len / 2][0];
        let q4 = array[len / 2][len / 2];

        let ok1 = true;
        let ok2 = true;
        let ok3 = true;
        let ok4 = true;

        let arr1 = [];
        let arr2 = [];
        let arr3 = [];
        let arr4 = [];
        let allsame = true;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                if (array[i][j] != start) {
                    allsame = false;
                    break;
                }
            }
            if (!allsame) break;
        }
        if (allsame) {
            result.push(start);
            return;
        }

        for (let i = 0; i < len / 2; i++) {
            arr1.push(array[i].slice(0, len / 2));
        }
        for (let i = 0; i < len / 2; i++) {
            arr2.push(array[i].slice(len / 2, len));
        }
        for (let i = len / 2; i < len; i++) {
            arr3.push(array[i].slice(0, len / 2));
        }
        for (let i = len / 2; i < len; i++) {
            arr4.push(array[i].slice(len / 2, len));
        }

        for (let i = 0; i < len / 2; i++) {
            for (let j = 0; j < len / 2; j++) {
                if (array[i][j] != q1) {
                    ok1 = false;
                    break;
                }
            }
            if (ok1 == false) break;
        }

        for (let i = 0; i < len / 2; i++) {
            for (let j = len / 2; j < len; j++) {
                if (array[i][j] != q2) {
                    ok2 = false;
                    break;
                }
            }
            if (ok2 == false) break;
        }
        for (let i = len / 2; i < len; i++) {
            for (let j = 0; j < len / 2; j++) {
                if (array[i][j] != q3) {
                    ok3 = false;
                    break;
                }
            }
            if (ok3 == false) break;
        }
        for (let i = len / 2; i < len; i++) {
            for (let j = len / 2; j < len; j++) {
                if (array[i][j] != q4) {
                    ok4 = false;
                    break;
                }
            }
            if (ok4 == false) break;
        }

        if (ok1 == true) result.push(q1);
        if (ok2 == true) result.push(q2);
        if (ok3 == true) result.push(q3);
        if (ok4 == true) result.push(q4);


        if (ok1 == false) divfour(arr1);
        if (ok2 == false) divfour(arr2);
        if (ok3 == false) divfour(arr3);
        if (ok4 == false) divfour(arr4);

    }

    divfour(arr);


    let onecount = 0;
    let zerocount = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == 0) zerocount++;
        if (result[i] == 1) onecount++;
    }

    return [zerocount, onecount];
}

console.log(solution(
    [
        [1, 1, 0, 0],
        [1, 0, 0, 0],
        [1, 0, 0, 1],
        [1, 1, 1, 1]
    ]));