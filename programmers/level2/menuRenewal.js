function solution(orders, course) {
    let res =[];
    for(let i=0; i<course.length; i++){
        let num = course[i];
        let allDiv = [];
        for(let i=0; i<orders.length; i++){
            let div = orders[i].split("").sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));
            let converted = getAllCombinations(div, num);
            allDiv.push(...converted);
        }
        allDiv = allDiv.map(a=>a.join(""))
        let set = [];
        allDiv.forEach(a=>{if(!set.includes(a)){set.push(a)}})
        let setObj = {};
        allDiv.forEach(a=>{if(setObj[a]){setObj[a]+=1}else{setObj[a]=1}})
        let max = 2;
        for(let i=0; i<set.length; i++){
            if(setObj[set[i]]>max) max = setObj[set[i]];
        }
        for(let i=0; i<set.length; i++){
            if(setObj[set[i]]===max) res.push(set[i]);
        }
    }

    res.sort();
    return res
}

function getAllCombinations(arr, m) {
    const combinations = [];
    const picked = [];
    const used = [];
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