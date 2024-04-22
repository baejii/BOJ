/*
 * https://www.acmicpc.net/problem/8393
 * 합
 * n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let sum = 0;
for (i=1; i <= input; i++) {
    sum += i;
}
console.log(sum);