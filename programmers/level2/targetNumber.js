function solution(numbers, target) {
    let count = 0;
    let opers = [[]];
    for (let i = 0; i < numbers.length; i++) {
        let tmp = [...opers];
        for (let j = 0; j < tmp.length; j++) {
            tmp[j] = [...tmp[j], 1];
            opers[j] = [...opers[j], -1];
        }
        opers = [...opers, ...tmp];
    }
    for (let i = 0; i < opers.length; i++) {
        let num = 0;
        for (let j = 0; j < opers[0].length; j++) {
            num += numbers[j] * opers[i][j]
        }
        if (num === target) count++
    }
    return count
}


function solution2(numbers, target) {
    let answer = 0;
    return go(numbers, target, 0, 0);
}

function go(numbers, num, index, sum) {
    if (index == numbers.length) {
        return sum == num ? 1 : 0;
    }
    let ret = 0;
    ret += go(numbers, num, index + 1, sum + -1 * numbers[index]);
    ret += go(numbers, num, index + 1, sum + numbers[index]);
    return ret;
}

function solution3(numbers, target) {
    let answer = 0;
    getAnswer(0,0);
    function getAnswer(x,value) {
        if(x<numbers.length){
            getAnswer(x+1,value + numbers[x]);
            getAnswer(x+1,value - numbers[x]);
        } else{
            if(value === target){
                answer++
            }
        }
    }
    return answer;
}