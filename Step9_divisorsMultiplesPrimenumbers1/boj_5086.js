/*
 * https://www.acmicpc.net/problem/5086
 * 배수와 약수
 * 4 × 3 = 12이다.
 * 이 식을 통해 다음과 같은 사실을 알 수 있다.
 * 3은 12의 약수이고, 12는 3의 배수이다.
 * 4도 12의 약수이고, 12는 4의 배수이다.
 * 두 수가 주어졌을 때, 다음 3가지 중 어떤 관계인지 구하는 프로그램을 작성하시오.
 * 1. 첫 번째 숫자가 두 번째 숫자의 약수이다.
 * 2. 첫 번째 숫자가 두 번째 숫자의 배수이다.
 * 3. 첫 번째 숫자가 두 번째 숫자의 약수와 배수 모두 아니다.
 */


const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    if(b % a == 0) {
        console.log("factor");
    } else if(a % b == 0) {
        console.log("multiple");
    } else if(a === 0 && b === 0) {
        console.log('');
    } else {
        console.log("neither");
    }
}