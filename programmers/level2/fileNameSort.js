function solution(files) {
    let divided = [];
    for(let i=0; i<files.length; i++){
        let head = '', num = '', tail = '';
        for(let j=0; j<files[i].length; j++){
            if(!isNaN(files[i][j])){
                if(files[i][j]===' ') continue;
                head = files[i].slice(0,j);
                break;
            }
        }
        for(let j=head.length; j<files[i].length; j++){
            if(isNaN(files[i][j])||files[i][j]===' '){
                num = files[i].slice(head.length, j);
                tail = files[i].slice(j, files[i].length);
                break;
            }
            if(j===head.length+4){
                num = files[i].slice(head.length, head.length+5);
                tail = files[i].slice(head.length+5, files[i].length);
                break;
            }
            if(j===files[i].length-1){
                num = files[i].slice(head.length,j+1);
            }

        }
        divided.push([head, num, tail]);
    }
    divided.sort((a,b)=>comparison(a[0],b[0],a[1],b[1]));
    console.log(isNaN(" "));
    console.log(isNaN("."));
    console.log(isNaN("-"));
    return divided.map(a=>a.join(""))

}

function comparison(str1, str2, num1, num2){
    let min = Math.min(str1.length, str2.length);
    let a=str1.toLowerCase(), b=str2.toLowerCase();
    for(let i=0; i<min; i++){
        if(a.charCodeAt(i)>b.charCodeAt(i)) return 1;
        if(a.charCodeAt(i)<b.charCodeAt(i)) return -1;
    }
    if(a.length > b.length) {
        return 1;
    }else if(a.length < b.length){
        return -1;
    }else{
        return numComparison(num1, num2);
    }
}

function numComparison(num1, num2){
    let a=parseInt(num1), b=parseInt(num2);
    if(a>b) return 1;
    else if(a<b) return -1;
    else return 0;
}