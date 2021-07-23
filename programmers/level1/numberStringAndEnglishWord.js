function solution(s) {
    let answer = '';
    for(let i=0; i<s.length; i++){
        if(!isNaN(s[i])) {
            answer+=s[i];
            continue;
        }else if(s[i]==='z'){
            answer+='0';
            i+=3;
        }else if(s[i]==='o'){
            answer+='1';
            i+=2;
        }else if(s[i]==='t'){
            if(s.slice(i,i+3)==='two'){
                answer+='2';
                i+=2;
            }else{
                answer+='3';
                i+=4;
            }
            continue;
        }else if(s[i]==='f'){
            if(s.slice(i,i+4)==='four'){
                answer+='4';
            }else{
                answer+='5';
            }
            i+=3;
            continue;
        }else if(s[i]==='s'){
            if(s.slice(i,i+3)==='six'){
                answer+='6';
                i+=2;
            }else{
                answer+='7';
                i+=4;
            }
            continue;
        }else if(s[i]==='e'){
            answer+='8';
            i+=4;
        }else if(s[i]==='n'){
            answer+='9';
            i+=3;
        }
    }
    return parseInt(answer)
}


function solution2(s){
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}