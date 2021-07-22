function solution(maps) {
    let INF = 100000;
    let dist = [];
    for(let i=0; i<maps.length; i++){
        dist.push([]);
        for(let j=0; j<maps[0].length; j++){
            dist[i].push(INF);
        }
    }

    dist[0][0] = 1;

    let check = [[0,0]];
    while(check.length){
        let now = check.shift();
        if(0 <= now[0]-1 && maps[now[0]-1][now[1]]===1 && dist[now[0]-1][now[1]] > dist[now[0]][now[1]]+1){
            dist[now[0]-1][now[1]] = dist[now[0]][now[1]] +1;
            check.push([now[0]-1, now[1]]);
        }
        if(0 <= now[1]-1 && maps[now[0]][now[1]-1]===1 && dist[now[0]][now[1]-1] > dist[now[0]][now[1]]+1){
            dist[now[0]][now[1]-1] = dist[now[0]][now[1]] +1;
            check.push([now[0], now[1]-1]);
        }
        if(now[0]+1<maps.length && maps[now[0]+1][now[1]]===1 && dist[now[0]+1][now[1]] > dist[now[0]][now[1]]+1){
            dist[now[0]+1][now[1]] = dist[now[0]][now[1]] +1;
            check.push([now[0]+1, now[1]]);
        }
        if(now[1]+1<maps[0].length && maps[now[0]][now[1]+1]===1 && dist[now[0]][now[1]+1] > dist[now[0]][now[1]]+1){
            dist[now[0]][now[1]+1] = dist[now[0]][now[1]] +1;
            check.push([now[0], now[1]+1]);
        }
    }

    let answer = dist[maps.length-1][maps[0].length-1]
    return answer === INF ? -1 : answer
}