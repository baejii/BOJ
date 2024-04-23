/*
 * https://www.acmicpc.net/problem/27866
 * 문자와 문자열
 * 단어 S와 정수 i가 주어졌을 때, S의 i번째 글자를 출력하는 프로그램을 작성하시오.
 */

const [s, i]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const letter = s.split('')
console.log(letter[i-1]);