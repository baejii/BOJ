/*
 * https://www.acmicpc.net/problem/5073
 * 삼각형과 세 변
 * 삼각형의 세 변의 길이가 주어질 때 변의 길이에 따라 다음과 같이 정의한다.
 * - Equilateral :  세 변의 길이가 모두 같은 경우
 * - Isosceles : 두 변의 길이만 같은 경우
 * - Scalene : 세 변의 길이가 모두 다른 경우
 * 단 주어진 세 변의 길이가 삼각형의 조건을 만족하지 못하는 경우에는 "Invalid" 를 출력한다. 
 * 예를 들어 6, 3, 2가 이 경우에 해당한다. 가장 긴 변의 길이보다 나머지 두 변의 길이의 합이 길지 않으면 삼각형의 조건을 만족하지 못한다.
 * 세 변의 길이가 주어질 때 위 정의에 따른 결과를 출력하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function triangleType(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid";
    }
    if (a === b && b === c) {
        return "Equilateral";
    }
    if (a === b || a === c || b === c) {
        return "Isosceles";
    }
    return "Scalene";
}

for (let i = 0; i < input.length; i += 3) {
    const a = input[i];
    const b = input[i + 1];
    const c = input[i + 2];

    if (a === 0 && b === 0 && c === 0) {
        break;
    }
    console.log(triangleType(a, b, c));
}