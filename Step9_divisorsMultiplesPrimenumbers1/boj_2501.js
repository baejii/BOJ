/*
 * https://www.acmicpc.net/problem/2501
 * 약수 구하기
 * 어떤 자연수 p와 q가 있을 때, 만일 p를 q로 나누었을 때 나머지가 0이면 q는 p의 약수이다. 
 * 6을 예로 들면
 * - 6 ÷ 1 = 6 … 0
 * - 6 ÷ 2 = 3 … 0
 * - 6 ÷ 3 = 2 … 0
 * - 6 ÷ 4 = 1 … 2
 * - 6 ÷ 5 = 1 … 1
 * - 6 ÷ 6 = 1 … 0
 * 그래서 6의 약수는 1, 2, 3, 6, 총 네 개이다.
 * 두 개의 자연수 N과 K가 주어졌을 때, N의 약수들 중 K번째로 작은 수를 출력하는 프로그램을 작성하시오.
 */

const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const arr = [];
for (let i = 1; i < n+1; i++) {
    if(n % i == 0) {
        arr.push(i);
    }
}
if (arr.length < k) {
    console.log(0)
} else {
    console.log(arr[k-1]);
}