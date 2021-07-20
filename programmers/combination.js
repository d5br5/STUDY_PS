function combination(source, target, n, r, count){
    if(r===0) final.push(target);
    else if(n===0 || n<r) return;
    else {
        target.push(source[count]);
        combination(source, Object.assign([], target), n-1, r-1, count+1);
        target.pop();
        combination(source, Object.assign([], target), n-1, r, count+1);
    }
}

const source = [1,2,3,4,5];
const final = [];

function getAllCombinations(arr, m) {
    const combinations = [];
    const picked = [];
    const used = [];
    for (item of arr) used.push(0);
    for(let i=0; i<arr.length; i++){
        used.push(0);
    }

    function find(picked) {
        if (picked.length === m) {
            const rst = [];
            for (let i of picked) {
                rst.push(arr[i]);
            }
            combinations.push(rst);
            return;
        } else {
            let start = picked.length ? picked[picked.length-1] + 1 : 0;
            for (let i = start; i < arr.length; i++) {
                if (i === 0 || arr[i] !== arr[i-1] || used[i-1]) {
                    picked.push(i);
                    used[i] = 1;
                    find(picked);
                    picked.pop();
                    used[i] = 0;
                }
            }
        }
    }
    find(picked);
    return combinations;
}