/*
 * https://www.acmicpc.net/problem/1735
 * 분수 합
 * 분수 A/B는 분자가 A, 분모가 B인 분수를 의미한다. A와 B는 모두 자연수라고 하자.
 * 두 분수의 합 또한 분수로 표현할 수 있다. 두 분수가 주어졌을 때, 그 합을 기약분수의 형태로 구하는 프로그램을 작성하시오. 기약분수란 더 이상 약분되지 않는 분수를 의미한다.
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [numeratorA, denominatorA] = input[0].split(' ').map(Number);
const [numeratorB, denominatorB] = input[1].split(' ').map(Number);

const numerator = numeratorA * denominatorB + numeratorB * denominatorA;
const denominator = denominatorA * denominatorB;

function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
const divisor = gcd(numerator, denominator);
console.log(numerator/divisor, denominator/divisor);