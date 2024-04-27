/*
 * https://www.acmicpc.net/problem/2501
 * 약수들의 합
 * 어떤 숫자 n이 자신을 제외한 모든 약수들의 합과 같으면, 그 수를 완전수라고 한다.
 * 예를 들어 6은 6 = 1 + 2 + 3 으로 완전수이다.
 * n이 완전수인지 아닌지 판단해주는 프로그램을 작성하라.
 */
const n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

for(let i = 0; i < n.length-1; i++) {
    let factor = [];
    let sum = 0;
    for(let j = 1; j < n[i]; j++) {
        if (n[i] % j === 0) {
            factor.push(j);
            sum += j;
        }
    }
    if(sum === n[i]) {
        console.log(`${n[i]} = ${factor.join(' + ')}`);
    } else {
        console.log(`${n[i]} is NOT perfect.`)
    }
}