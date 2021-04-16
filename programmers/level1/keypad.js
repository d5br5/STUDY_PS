function solution(numbers, hand) {
    var leftnow = 10;
    var rightnow = 12;
    var answer = '';

    function distance(now, goal) {
        let vnow = parseInt((now - 1) / 3);
        let vgoal = parseInt((goal - 1) / 3);
        let hnow = (now - 1) % 3;
        let hgoal = (goal - 1) % 3;
        if (now == 0) {
            vnow = 3;
            hnow = 1;
        }
        if (goal == 0) {
            vgoal = 3;
            hgoal = 1;
        }

        return Math.abs(vnow - vgoal) + Math.abs(hnow - hgoal);

    }
    for (let i = 0; i < numbers.length; i++) {
        let now = numbers[i];
        if (now == 1 || now == 4 || now == 7) {
            answer += 'L';
            leftnow = now;
        }
        if (now == 3 || now == 6 || now == 9) {
            answer += 'R';
            rightnow = now;
        }
        if (now == 2 || now == 5 || now == 8 || now == 0) {
            if (distance(leftnow, now) > distance(rightnow, now)) {
                answer += 'R';
                rightnow = now;
            } else if (distance(leftnow, now) < distance(rightnow, now)) {
                answer += 'L';
                leftnow = now;
            } else {
                if (hand == "left") {
                    answer += 'L';
                    leftnow = now;
                } else {
                    answer += 'R';
                    rightnow = now;
                }
            }
        }
    }
    return answer;
}