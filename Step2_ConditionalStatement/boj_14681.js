/*
 * https://www.acmicpc.net/problem/14681
 * 사분면 고르기
 * 흔한 수학 문제 중 하나는 주어진 점이 어느 사분면에 속하는지 알아내는 것이다. 
 * 사분면은 아래 그림처럼 1부터 4까지 번호를 갖는다. "Quadrant n"은 "제n사분면"이라는 뜻이다.
 *                      y
 *                      ↑
 *      Quadrant 2      |      Quadrant 1
 *                      |
 *    B (-12, 5)•       |       •A (12, 5)
 * ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ | ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ→ x
 *   C (-12, -5)•       |       •D (12, -5)
 *                      |
 *      Quadrant 3      |      Quadrant 4
 *                      |
 * 예를 들어, 좌표가 (12, 5)인 점 A는 x좌표와 y좌표가 모두 양수이므로 제1사분면에 속한다. 
 * 점 B는 x좌표가 음수이고 y좌표가 양수이므로 제2사분면에 속한다.
 * 점의 좌표를 입력받아 그 점이 어느 사분면에 속하는지 알아내는 프로그램을 작성하시오. 단, x좌표와 y좌표는 모두 양수나 음수라고 가정한다.
 */

let input = require('fs').readFileSync(0).toString().trim().split('\n');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if (a > 0) {
    if (b > 0) {
        console.log(1);
    } else {
        console.log(4);
    } 
} else {
    if (b > 0) {
        console.log(2);
    } else {
        console.log(3);
    } 
}