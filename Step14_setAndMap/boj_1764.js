/*
 * https://www.acmicpc.net/problem/1764
 * 듣보잡
 * 김진영이 듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const listen = input.slice(1, n + 1);
const see = input.slice(n + 1);

function findCommon(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const result = [];

    set1.forEach(e => {
        if (set2.has(e)) {
            result.push(e);
        }
    });
    return result;
}

const common = findCommon(listen, see).sort();
console.log(`${common.length}
${common.join('\n')}`);