/*
 * https://www.acmicpc.net/problem/3009
 * 네 번째 점
 * 세 점이 주어졌을 때, 축에 평행한 직사각형을 만들기 위해서 필요한 네 번째 점을 찾는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let points = [];
for (let i = 0; i < input.length; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    points.push([x, y]);
}

function findFourthPoint(point1, point2, point3) {
    let fourthX, fourthY;
    
    if(point1[0] === point2[0]) {
        fourthX = point3[0];
    } else if(point1[0] === point3[0]) {
        fourthX = point2[0];
    } else {
        fourthX = point1[0];
    }

    if(point1[1] === point2[1]) {
        fourthY = point3[1];
    } else if(point1[1] === point3[1]) {
        fourthY = point2[1];
    } else {
        fourthY = point1[1];
    }

    return [fourthX, fourthY];
}

const fourthPoint = findFourthPoint(points[0], points[1], points[2]);

console.log(fourthPoint.join(' '));