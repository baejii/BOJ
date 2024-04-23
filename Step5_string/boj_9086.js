/*
 * https://www.acmicpc.net/problem/9086
 * 문자열
 * 문자열을 입력으로 주면 문자열의 첫 글자와 마지막 글자를 출력하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = parseInt(input[0]); 
const arr = input.slice(1).map((line => line.split('')));

for (i = 0; i < t; i++) {
    console.log(arr[i][0] + arr[i].slice(-1)[0]);
}