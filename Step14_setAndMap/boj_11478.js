/*
 * https://www.acmicpc.net/problem/11478
 * 서로 다른 부분 문자열의 개수
 * 문자열 S가 주어졌을 때, S의 서로 다른 부분 문자열의 개수를 구하는 프로그램을 작성하시오.
 * 부분 문자열은 S에서 연속된 일부분을 말하며, 길이가 1보다 크거나 같아야 한다.
 * 예를 들어, ababc의 부분 문자열은 a, b, a, b, c, ab, ba, ab, bc, aba, bab, abc, abab, babc, ababc가 있고, 서로 다른것의 개수는 12개이다.
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function countUniqueSubstrings(s) {
    const substrings = new Set();
  
    for (let i = 0; i < s.length; i++) {
      for (let j = i + 1; j <= s.length; j++) {
        substrings.add(s.slice(i, j));
      }
    }
    return substrings.size;
}

const result = countUniqueSubstrings(input);
console.log(result);