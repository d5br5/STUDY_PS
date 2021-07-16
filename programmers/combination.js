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