function solution(s) {
    let max = 1;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j <= s.length - i; j++) {
            if (isPalindrome(s.slice(j, j + i))) {
                max = i;
                break;
            }
        }
    }
    return max
}

function isPalindrome(s) {
    let point = Math.ceil(s.length / 2);
    for (let i = 0; i < point; i++) {
        if (s[i] !== s[s.length - 1 - i]) return false;
    }
    return true
}
