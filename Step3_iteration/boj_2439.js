/*
 * https://www.acmicpc.net/problem/2439
 * 별 찍기 - 2
 * 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
 * 하지만, 오른쪽을 기준으로 정렬한 별(예제 참고)을 출력하시오.
 */

let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input);

for(i = 1; i < n+1; i++) {
    const star = ' '.repeat(n-i) + '*'.repeat(i);
    console.log(star);
}