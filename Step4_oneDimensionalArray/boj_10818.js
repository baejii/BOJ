/*
 * https://www.acmicpc.net/problem/10818
 * 최소, 최대
 * N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
 */

const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);

console.log(Math.min(...arr), Math.max(...arr));