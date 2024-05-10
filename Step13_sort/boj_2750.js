/*
 * https://www.acmicpc.net/problem/2750
 * 수 정렬하기
 * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const arr = [];
for(let i = 1; i <= input.length; i++) {
    arr.push(input[i]);
}
const result = arr.sort((x, y) => x - y);
console.log(result.join('\n'));