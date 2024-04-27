/*
 * https://www.acmicpc.net/problem/2566
 * 최댓값
 * <그림 1>과 같이 9×9 격자판에 쓰여진 81개의 자연수 또는 0이 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 행 몇 열에 위치한 수인지 구하는 프로그램을 작성하시오.
 * 예를 들어, 다음과 같이 81개의 수가 주어지면 이들 중 최댓값은 90이고, 이 값은 5행 7열에 위치한다.
 */


const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = [];
const maxArr = [];
for(let i = 0; i < 9; i++) {
    arr.push(input[i].split(' ').map(Number));
    const max = Math.max(...arr[i]);
    maxArr.push(max);
}
const resultMax = Math.max(...maxArr);
console.log(resultMax);

function findIndex(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === target) return [i+1, j+1];
        }
    }
}

const index = findIndex(arr, resultMax);
console.log(index.join(' ')); 