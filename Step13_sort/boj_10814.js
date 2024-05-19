/*
 * https://www.acmicpc.net/problem/10814
 * 나이순 정렬
 * 온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다.
 * 이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.
 */

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = parseInt(input[0]);
const members = [];

for (let i = 1; i < input.length; i++) {
    const [age, name] = input[i].split(' ');
    members.push({age: parseInt(age), name: name});
}

members.sort((a, b) => a.age - b.age);

members.forEach(member => console.log(member.age, member.name));