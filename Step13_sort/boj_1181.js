/*
 * https://www.acmicpc.net/problem/1181
 * 단어 정렬
 * 알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
 * 1. 길이가 짧은 것부터
 * 2. 길이가 같으면 사전 순으로
 * 단, 중복된 단어는 하나만 남기고 제거해야 한다.
 */

const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');

const n = parseInt(input[0]);
const words = new Set(input.slice(1));

const sortedWords = Array.from(words).sort((a, b) => {
    if(a.length !== b.length) {
        return a.length - b.length;
    }
    return a.localeCompare(b);
});

sortedWords.forEach(word => console.log(word));
