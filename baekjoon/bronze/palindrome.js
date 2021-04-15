input = ["111", "232", "112", "123", "0"];

let len = input.length;

function palind(str) {
    let origin = str.split("");
    let rev = str.split("").reverse();

    let ispalin = "yes";
    while (origin.length > 0) {
        if (origin.pop() != rev.pop()) {
            ispalin = "no";
            break;
        }
    }
    return ispalin;

}

for (let i = 0; i < len - 1; i++) {

    console.log(palind(input[i]));

}