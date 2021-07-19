function solution(expression) {
    const v1 = Math.abs(expValue(expression, ['+','-','*']));
    const v2 = Math.abs(expValue(expression, ['+','*','-']));
    const v3 = Math.abs(expValue(expression, ['-','+','*']));
    const v4 = Math.abs(expValue(expression, ['-','*','+']));
    const v5 = Math.abs(expValue(expression, ['*','+','-']));
    const v6 = Math.abs(expValue(expression, ['*','-','+']));
    return Math.max(v1,v2,v3,v4,v5,v6);
}

function expValue(exp, priority){
    let spread = [];
    let num = '';
    for(let i=0; i<exp.length; i++){
        if(exp[i]==='+' || exp[i]==='-' || exp[i]==='*') {
            spread.push(num);
            spread.push(exp[i]);
            num='';
        }else{
            num+=exp[i];
        }
    }
    spread.push(num);

    let operStack = [];
    let stack = [];

    for(let i=0; i<spread.length; i++){
        if(spread[i]==='*' || spread[i]==='-' || spread[i]==='+'){
            if(operStack.length===0){
                operStack.push(spread[i]);
                continue;
            }else{
                while(operStack.length > 0 && priority.indexOf(operStack[operStack.length-1])<=priority.indexOf(spread[i])){
                    stack.push(operStack.pop());
                }
                operStack.push(spread[i]);
            }
        }else{
            stack.push(parseInt(spread[i]));
        }
        if(i===spread.length-1){
            while(operStack.length){
                stack.push(operStack.pop());
            }
        }
    }

    let resStack=[];
    for(let i=0; i<stack.length; i++){
        if(stack[i]==='*' || stack[i] === '+' || stack[i]==='-'){
            let last = resStack.pop();
            let before = resStack.pop();
            resStack.push(val(before, last, stack[i]));
        }else{
            resStack.push(stack[i]);
        }
    }
    return resStack[0];
}

function val(a,b,exp){
    if(exp==='*'){
        return a*b;
    }else if(exp==='+'){
        return a+b;
    }else{
        return a-b;
    }
}