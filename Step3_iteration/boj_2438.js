/*
 * https://www.acmicpc.net/problem/2438
 * 별 찍기 - 1
 * 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
 */

let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

for(i = 1; i < n+1; i++) {
    const star = '*'.repeat(i);
    console.log(star);
}