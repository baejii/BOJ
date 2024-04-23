/*
 * https://www.acmicpc.net/problem/10807
 * 개수 세기
 * 총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, arr, v] = input;

const count = arr.split(' ').filter(num => num === v).length;
console.log(count);