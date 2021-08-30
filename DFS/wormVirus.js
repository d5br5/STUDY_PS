// codeup 4503-virus
function solution(network, total){
    let graph = [];
    let tmp = [];
    let visited = [];

    for(let i=0; i<total; i++){
        tmp.push(0);
        visited.push(false);
    }

    for(let i=0; i<total; i++){
        graph.push([...tmp]);
    }

    for(let i=0; i<network.length; i++){
        graph[network[i][0]-1][network[i][1]-1] = 1;
        graph[network[i][1]-1][network[i][0]-1] = 1;
    }

    let stack = [1];
    let route = [];

    while(stack.length){
        let now = stack.pop();
        if(!visited[now-1])route.push(now);
        visited[now-1] = true;
        for(let i=0; i<total; i++){
            if(graph[now-1][i]===1 && !visited[i]){
                stack.push(i+1);

            }
        }
    }

    console.log(route);
    console.log(visited)
    
    
}


const network = [[1,2],[2,3],[1,5],[5,2],[5,6],[4,7]];
solution(network,7);