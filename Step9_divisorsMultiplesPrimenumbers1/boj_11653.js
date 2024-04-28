/*
 * https://www.acmicpc.net/problem/3003
 * 소인수분해
 * 정수 N이 주어졌을 때, 소인수분해하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = parseInt(input);

const arr = [];
let divisor = 2;

while (n !== 1) {
    if (n % divisor === 0) {
        arr.push(divisor);
        n /= divisor;
    } else {
        divisor++;
    }
}

if (arr.length > 0) {
    console.log(arr.join('\n'));
}