/*
 * https://www.acmicpc.net/problem/10890
 * 알파벳 찾기
 * 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
 */

let input = require('fs').readFileSync('/dev/stdin').toString().trim();
const alphabet = new Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
    const index = input.charCodeAt(i) - 97;
    if (alphabet[index] === -1) {
        alphabet[index] = i;
    }
}

console.log(alphabet.join(' '));