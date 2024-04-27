/*
 * https://www.acmicpc.net/problem/1978
 * 직사각형
 * 정수 A, B 가 주어진다. 세로 길이가 A cm, 가로 길이가 B cm 인 아래와 같은 직사각형의 넓이를 cm2 단위로 구하시오.
 */

const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

console.log(a * b);