/*
 * https://www.acmicpc.net/problem/1157
 * 단어 공부
 * 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 
 * 단, 대문자와 소문자를 구분하지 않는다.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().toLowerCase();

let count = {};
for (let i = 0; i < input.length; i++) {
    let alphabet = input[i];
    if (count[alphabet]) {
        count[alphabet]++;
    } else {
        count[alphabet] = 1;
    }
}

let maxCount = 0;
let maxAlphabet = "";
let maxAlphabetExists = false;

for (let alphabet in count) {
    if (count[alphabet] > maxCount) {
        maxCount = count[alphabet];
        maxAlphabet = alphabet.toUpperCase();
        maxAlphabetExists = true;
    } else if (count[alphabet] === maxCount) {
        maxAlphabetExists = false;
    }
}

if (maxAlphabetExists) {
    console.log(maxAlphabet);
} else {
    console.log('?');
}