/*
 * https://www.acmicpc.net/problem/1934
 * 최소공배수
 * 두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다. 이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다. 
 * 예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.
 * 두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = parseInt(input[0]);

function getGCD(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function getLCM(num1, num2) {
    return (num1 * num2) / getGCD(num1, num2);
}

for (let i = 1; i < input.length; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    console.log(getLCM(a, b));
}

