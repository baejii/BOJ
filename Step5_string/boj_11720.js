/*
 * https://www.acmicpc.net/problem/11720
 * 숫자의 합
 * N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
 */

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = parseInt(input[0]);
let arr = input[1].split('').map(Number);

const sum = arr.reduce((total, current) => total + current, 0);
console.log(sum);