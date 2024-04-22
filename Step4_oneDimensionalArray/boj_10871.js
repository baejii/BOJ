/*
 * https://www.acmicpc.net/problem/10871
 * X보다 작은 수
 * 정수 N개로 이루어진 수열 A와 정수 X가 주어진다. 이때, A에서 X보다 작은 수를 모두 출력하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0].split(' ')[0]);
const x = parseInt(input[0].split(' ')[1]);
const arr = input[1];

const num = arr.split(' ').filter(a => a < x);
console.log(num.join(' '));