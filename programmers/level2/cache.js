function solution(cacheSize, cities) {
    let count = 0;
    let cache = [];
    for (let i = 0; i < cities.length; i++) {
        let cityelem = cities[i].toLowerCase();
        if (cache.includes(cityelem)) {  // cache hit
            cache.splice(cache.indexOf(cityelem), 1);
            cache.push(cityelem);
            count += 1;
        } else {  // cache miss
            if (cache.length >= cacheSize) cache.shift();
            if (cache.length < cacheSize) cache.push(cityelem);
            count += 5;
        }
    }
    return count;
}