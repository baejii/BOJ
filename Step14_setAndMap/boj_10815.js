/*
 * https://www.acmicpc.net/problem/10815
 * 숫자 카드
 * 숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 
 * 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 가지고 있는지 아닌지를 구하는 프로그램을 작성하시오.
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const m = parseInt(input[2]);

const card = new Set(input[1].split(' ').map(Number));
const compareCard = input[3].split(' ').map(Number);

const answer = [];

for (let i = 0; i < compareCard.length; i++) {
    if (card.has(compareCard[i])) {
        answer.push(1);
    } else {
        answer.push(0);
    }
}
console.log(answer.join(' '));