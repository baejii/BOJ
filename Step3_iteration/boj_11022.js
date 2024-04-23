/*
 * https://www.acmicpc.net/problem/11022
 * A+B - 8
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = "";
for (let i = 1; i <= input[0]; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    result = a+b;
    console.log('Case #' + i + ': ' + a + ' + ' + b +' = ' + result);
}