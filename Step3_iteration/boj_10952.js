/*
 * https://www.acmicpc.net/problem/10952
 * A+B - 5
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 */

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = "";

for(i = 0; i < input.length-1; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    result = a+b;
    console.log(result);
}