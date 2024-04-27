/*
 * https://www.acmicpc.net/problem/1978
 * 소수 찾기
 * 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);
const num = input[1].split(' ').map(Number);

let primeCnt = 0;
for(let i = 0; i < n; i++) {
    let isPrime = true;
    if(num[i] <= 1) {
        isPrime = false;
    } else {
        for(let j = 2; j <= Math.sqrt(num[i]); j++) {
            if (num[i] % j === 0) {
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime == true) {
        primeCnt++;
    }
}
console.log(primeCnt);