/*
 * https://www.acmicpc.net/problem/2581
 * 소수
 * 자연수 M과 N이 주어질 때 M이상 N이하의 자연수 중 소수인 것을 모두 골라 이들 소수의 합과 최솟값을 찾는 프로그램을 작성하시오.
 * 예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 소수는 61, 67, 71, 73, 79, 83, 89, 97 총 8개가 있으므로, 이들 소수의 합은 620이고, 최솟값은 61이 된다.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function isPrime(num) {
    if(num <= 1) {
        return false;
    } else {
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                return false;
            }
        }
    }
    return true;
}

let arr = [];
let sum = 0;
for(let i = input[0]; i <= input[1]; i++) {
    if(isPrime(i)) {
        arr.push(i);
        sum += i;
    } else {
        arr.push(-1);
    }
}
console.log(sum);
console.log(Math.min(...arr));