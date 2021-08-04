function solution(genres, plays) {
    let dic = new Map();
    let filteredGenres = [];
    let times = {};
    let res = [];

    for (let i = 0; i < genres.length; i++) {
        if (dic.has(genres[i])) {
            dic.set(genres[i], [...dic.get(genres[i]), [i, plays[i]]]);
            times[genres[i]] += plays[i];
        } else {
            filteredGenres.push(genres[i]);
            dic.set(genres[i], [[i, plays[i]]]);
            times[genres[i]] = plays[i];
        }
    }

    filteredGenres.sort((a, b) => times[b] - times[a]);

    for (let i = 0; i < filteredGenres.length; i++) {
        let tmp = [...dic.get(filteredGenres[i])];
        tmp.sort((a, b) => b[1] - a[1]);
        if (tmp.length === 1) {
            res.push(tmp[0][0]);
        } else {
            res.push(tmp[0][0]);
            res.push(tmp[1][0]);
        }
    }
    return res

}