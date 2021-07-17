function solution(s) {
    let min = s.length;
    for(let i=1; i<=s.length/2; i++){
        let tmp = '';
        let tmpCount = 1;
        let count = 0;
        for(let j=0; j<s.length; j+=i){
            let str = s.slice(j,j+i);
            if(str===tmp){  // 중복
                tmpCount++;
            }else{ // 신규
                if(tmpCount===1){
                    count+= Math.ceil(Math.log10(tmpCount))+tmp.length;
                }else{
                    count+= Math.ceil(Math.log10(tmpCount+1))+tmp.length;
                }
                tmp = str;
                tmpCount = 1;
            }
            if(j+i>=s.length){
                if(tmpCount===1){
                    count+= Math.ceil(Math.log10(tmpCount))+tmp.length;
                }else{
                    count+= Math.ceil(Math.log10(tmpCount+1))+tmp.length;
                }
            }
        }
        if(count<min) min = count;
    }
    return min;
}