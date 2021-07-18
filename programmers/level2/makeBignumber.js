function solution(number, k) {
    let stack = [number[0]];
    let count = 0;
    for(let i=1; i<number.length; i++){
        while(stack[stack.length-1]<number[i] && count < k){
            stack.pop();
            count++;
        }
        stack.push(number[i]);
        if(count===k) {
            stack.push(number.slice(i+1))
            break;
        }
    }
    if(count<k){
        for(let i=0; i<k-count; i++){
            stack.pop();
        }
    }
    let answer='';
    stack.forEach(e=>answer+=e);
    return answer;
}