/*
 * https://www.acmicpc.net/problem/2739
 * 구구단
 * N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
 */

let input = require('fs').readFileSync('/dev/stdin').toString().trim();
var n = parseInt(input[0]);

console.log(`${n} * 1 = ${n * 1}
${n} * 2 = ${n * 2}
${n} * 3 = ${n * 3}
${n} * 4 = ${n * 4}
${n} * 5 = ${n * 5}
${n} * 6 = ${n * 6}
${n} * 7 = ${n * 7}
${n} * 8 = ${n * 8}
${n} * 9 = ${n * 9}`);