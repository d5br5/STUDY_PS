function solution(table, languages, preference) {
    let points = {};
    for(let i=0; i<table.length; i++){
        let parsed = table[i].split(" ");
        points[parsed[0]] = {};
        for(let j=1; j<parsed.length; j++){
            points[parsed[0]][parsed[j]] = 6-j;
        }
    }

    let categories = Object.keys(points).sort();
    let totals = [];

    for(let i=0; i<categories.length; i++){
        let point = 0;
        for(let j=0; j<languages.length; j++){
            if(points[categories[i]][languages[j]]>0){
                point += points[categories[i]][languages[j]] * preference[j]
            }
        }
        totals.push(point);
    }

    let maxIndex = 0;
    let max = 0;

    for(let i=0; i<totals.length; i++){
        if(totals[i]>max){
            max = totals[i];
            maxIndex = i;
        }
    }

    return categories[maxIndex];
}