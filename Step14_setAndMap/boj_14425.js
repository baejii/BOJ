/*
 * https://www.acmicpc.net/problem/14425
 * 문자열 집합
 * 총 N개의 문자열로 이루어진 집합 S가 주어진다.
 * 입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const charArr = new Set();
for(let i = 1; i <= n; i++) {
    charArr.add(input[i]);
}

let count = 0;
for(let i = n+1; i < input.length; i++) {
    if (charArr.has(input[i])) {
        count += 1;
    }
}
console.log(count);