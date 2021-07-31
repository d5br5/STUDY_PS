// 다시 풀기

function solution(stones, k) {
    if (stones.length === 1) return stones[0];
    let now = findMin(stones);
    let converted = downs(stones, now);

    while (true) {
        if (maxZeros(converted) < k) {
            now++;
            converted = downs(converted, 1)
        } else {
            break;
        }
    }
    return now;
}

function findMin(arr) {
    let min = 200000000;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i];
    }
    return min;
}

function maxZeros(arr) {
    let max = 0;
    let now = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            now++;
            if (i < arr.length - 1 && arr[i + 1] !== 0) {
                if (now > max) max = now;
                now = 0;
            }
        }
    }
    return max;
}

function downs(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            newArr.push(0)
        } else {
            newArr.push(arr[i] - num)
        }
    }
    return newArr;
}


function checkStone(stones, mid, k) {
    let now = 0;
    for(let i = 0; i < stones.length; i++) {
        if(stones[i] < mid) {
            now += 1;
        } else {
            now = 0;
        }
        if(now >= k) {
            return false;
        }
    }
    return true;
}
function solution(stones, k) {
    let [min, max] = findMinMax(stones);
    let left = min;
    let right = max;

    while(left < right-1) {
        let mid = parseInt((left + right) / 2);
        if (checkStone(stones, mid, k)) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return left;
}

function findMinMax(arr) {
    let min = 200000000;
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if(min > arr[i]) min = arr[i];
        if(max < arr[i]) max = arr[i];
    }
    return [min,max];
}
