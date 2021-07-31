// 다시 풀기

function solution(gems) {
    let total = [];
    for (let i = 0; i < gems.length; i++) {
        if (!total.includes(gems[i])) {
            total.push(gems[i])
        }
    }

    let count = 0;
    let now = [];
    let min = 100000;
    let answer = [];
    for (let i = 0; i <= gems.length - total.length; i++) {
        for (let j = i; j < gems.length; j++) {
            if (!now.includes(gems[j])) {
                now.push(gems[j]);
                count++;
            }
            if (count === total.length) {
                if (j - i < min) {
                    min = j - i;
                    answer = [i + 1, j + 1];
                }
                break;
            }
        }
        now = [];
        count = 0;
    }
    return answer
}

function solution2(gems){
    let count = new Set(gems).size;
    let gemMap = new Map()
    let gemLength = []

    gems.forEach((gem, i)=> {
        gemMap.delete(gem)
        gemMap.set(gem, i)
        if(gemMap.size === count){
            gemLength.push([gemMap.values().next().value + 1, i+1])
        }
    })

    gemLength.sort((a,b)=> {
        if(a[1]-a[0] === b[1]-b[0]){
            return a[1]-b[1]
        }
        return (a[1]-a[0])-(b[1]-b[0])
    })

    return gemLength[0]
}

function solution3(gems) {
    const cnt = new Set(gems).size;
    const gemMap = new Map();
    let answer = [1, gems.length];
    gems.forEach((gem, i) => {
        gemMap.delete(gem);
        gemMap.set(gem, i);
        if (gemMap.size === cnt){
            const cand = [gemMap.values().next().value + 1, i + 1];
            answer = answer[1] - answer[0] > cand[1] - cand[0] ? cand : answer;
        }
    })
    return answer;
}