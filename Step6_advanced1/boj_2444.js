/*
 * https://www.acmicpc.net/problem/2444
 * 별 찍기 - 7
 * 예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.
 */

let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let n = parseInt(input);

for (let i = 1; i <= n; i++) {
    let star = " ".repeat(n - i) + "*".repeat(2 * i - 1);
    console.log(star);
}
for (let i = n - 1; i >= 1; i--) {
    let star = " ".repeat(n - i) + "*".repeat(2 * i - 1);
    console.log(star);
}