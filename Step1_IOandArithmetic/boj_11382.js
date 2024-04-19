/*
 * https://www.acmicpc.net/problem/11382
 * 꼬마 정민
 * 꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!
 */

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

console.log(a + b + c);