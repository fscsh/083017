// author: Shuhao Chen
// date : 083017
function ipAddress(input) {
    return helper(input, 0, '', []);
}

function helper(input, level, tmp, res) {
    if (level === 4) {
        if (input.length === 0) res.push(tmp.substring(1));
        return;
    }
    for (let i = 1; i <= input.length; i++) {
        let num = input.substring(0, i);
        if (isValid(num)) helper(input.substring(i), level + 1, tmp + '.' + num, res)
    }
    return res;
}

function isValid(num) {
    if (num[0] === '0') return num.length === 1;
    if (parseInt(num) > 255) return false;
    return true;
}

console.log(ipAddress('10328723'));
