/*
 * https://www.acmicpc.net/problem/1000
 * A+B
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 */

let input = require('fs').readFileSync('example.txt').toString().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);