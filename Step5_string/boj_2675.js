/*
 * https://www.acmicpc.net/problem/2675
 * 문자열 반복
 * 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
 * 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.
 * QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.
 */


let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let t = parseInt(input[0]);

for (let i = 1; i <= t; i++) {
    let [r, s] = input[i].split(' ');
    let result = "";

    for (let j = 0; j < s.length; j++) {
        result += s[j].repeat(parseInt(r));
    }
    console.log(result);
}