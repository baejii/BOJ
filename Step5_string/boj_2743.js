/*
 * https://www.acmicpc.net/problem/2743
 * 단어 길이 재기
 * 알파벳으로만 이루어진 단어를 입력받아, 그 길이를 출력하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const word = input.split('').length;
console.log(word);