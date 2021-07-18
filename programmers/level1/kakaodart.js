function solution(dartResult) {

    let mode = 0;
    let arr = ["", "", ""];

    for (let i = 0; i < dartResult.length; i++) {
        arr[mode] = arr[mode] + dartResult[i];
        if (i < dartResult.length - 1) {
            if (isNaN(dartResult[i]) && !isNaN(dartResult[i + 1])) {
                mode++;
            }
        }

    }

    let point = arr.map(elem => parseInt(elem));
    let sqs = arr.map(elem => {
        if (elem.includes("S")) return 1;
        else if (elem.includes("D")) return 2;
        else if (elem.includes("T")) return 3;
        else return 0;
    })
    let options = arr.map(elem => {
        if (elem.includes("*")) return 2;
        else if (elem.includes("#")) return -1;
        else return 1;
    })

    if (options[1] === 2) options[0] *= 2;
    if (options[2] === 2) options[1] *= 2;

    let result = 0;
    for (let i = 0; i < 3; i++) {
        result += point[i] ** sqs[i] * options[i];
    }
    return result
}