function solution(scores) {
    let res = [];
    for (let i = 0; i < scores[0].length; i++) {
        let sum = 0,
            minCount = 1,
            min = 101,
            maxCount = 1,
            max = 0;
        for (let j = 0; j < scores.length; j++) {
            if (scores[j][i] < min) {
                min = scores[j][i];
                minCount = 1;
            } else if (scores[j][i] === min) {
                minCount++;
            }
            if (scores[j][i] > max) {
                max = scores[j][i];
                maxCount = 1;
            } else if (scores[j][i] === max) {
                maxCount++;
            }
            sum += scores[j][i];
        }
        if ((min === scores[i][i] && minCount === 1) || (max === scores[i][i] && maxCount === 1)) {
            sum -= scores[i][i];
            res.push(sum / (scores.length - 1));
        } else {
            res.push(sum / scores.length);
        }

    }
    return res.map(a => {
        if (a >= 90) {
            return 'A'
        } else if (a >= 80) {
            return 'B'
        } else if (a >= 70) {
            return 'C'
        } else if (a >= 50) {
            return 'D'
        } else {
            return 'F'
        }
    }).join("");
}