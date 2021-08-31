function solution(word) {
    let chars = ["A", "E", "I", "O", "U"];
    let dic = [];
    
    function DFS(depth, string){
        if(depth>=5) return;
        for(let i=0; i<chars.length; i++){
            dic.push(string+chars[i]);
            DFS(depth+1, string+chars[i]);
        }
    }
    
    DFS(0, '');
    return dic.indexOf(word)+1
}