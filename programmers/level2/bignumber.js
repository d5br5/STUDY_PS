function solution(number, k) {
    let source = [];
    for(let i=0; i<number.length; i++){
        source.push(i);
    }
    let final = [];

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

    combination(source, [], number.length, k, 0);

    let Max = 0;
    for(let i=0; i<final.length; i++){
        let str = '';
        for(let j=0; j<number.length; j++){
            if(!final[i].includes(j)) str+= number[j];
        }
        if(Max < parseInt(str)) Max = parseInt(str);
    }
    return Max+""
}

