/*
 * https://www.acmicpc.net/problem/2563
 * 색종이
 * 가로, 세로의 크기가 각각 100인 정사각형 모양의 흰색 도화지가 있다. 
 * 이 도화지 위에 가로, 세로의 크기가 각각 10인 정사각형 모양의 검은색 색종이를 색종이의 변과 도화지의 변이 평행하도록 붙인다. 
 * 이러한 방식으로 색종이를 한 장 또는 여러 장 붙인 후 색종이가 붙은 검은 영역의 넓이를 구하는 프로그램을 작성하시오.
 * 예를 들어 흰색 도화지 위에 세 장의 검은색 색종이를 그림과 같은 모양으로 붙였다면 검은색 영역의 넓이는 260이 된다.
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const papers = input.slice(1);

function calculateBlackArea(papers) {
    const canvasSize = 100;
    const canvas = Array(canvasSize).fill(0).map(() => Array(canvasSize).fill(0));

    for (let paper of papers) {
        const [x, y] = paper.split(' ').map(Number);
        for (let i = x; i < x + 10; i++) {
            for (let j = y; j < y + 10; j++) {
                canvas[i][j] = 1;
            }
        }
    }

    let blackArea = 0;
    for (let i = 0; i < canvasSize; i++) {
        for (let j = 0; j < canvasSize; j++) {
            blackArea += canvas[i][j];
        }
    }
    return blackArea;
}
const result = calculateBlackArea(papers);
console.log(result);