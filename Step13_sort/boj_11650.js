/*
 * https://www.acmicpc.net/problem/11650
 * 좌표 정렬하기
 * 2차원 평면 위의 점 N개가 주어진다. 좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = parseInt(input[0]);

const arr = [];
for (let i = 1; i <= n; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    arr.push({x, y});
}

arr.sort((a, b) => {
    if(a.x !== b.x) {
        return a.x - b.x;
    } else {
        return a.y - b.y;
    }
});

let result = '';
arr.forEach(point => {
    result += `${point.x} ${point.y}\n`;
});

console.log(result);