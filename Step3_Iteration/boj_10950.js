/*
 * https://www.acmicpc.net/problem/10950
 * A+B-3
 * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 */

const [n, ...arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (i=0; i < arr.length; i++) {
    console.log(parseInt(arr[i][0]) + parseInt(arr[i].split(' ')[1]));
} 