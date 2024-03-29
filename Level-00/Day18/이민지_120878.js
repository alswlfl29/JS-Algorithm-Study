/* 유한소수 판별하기
  문제 설명: 소수점 아래 숫자가 계속되지 않고 유한개인 소수를 유한소수라고 합니다. 분수를 소수로 고칠 때 유한소수로 나타낼 수 있는 분수인지 판별하려고 합니다. 유한소수가 되기 위한 분수의 조건은 다음과 같습니다.
          - 기약분수로 나타내었을 때, 분모의 소인수가 2와 5만 존재해야 합니다.
          두 정수 a와 b가 매개변수로 주어질 때, a/b가 유한소수이면 1을, 무한소수라면 2를 return하도록 solution 함수를 완성해주세요.
*/

function solution(a, b) {
  console.log(Number((a / b).toFixed(10)));
  return Number((a / b).toFixed(10)) === a / b ? 1 : 2;
}
// toFixed(): 부동 소수점 메소드(숫자를 고정 소수점 표기법으로 표시)
/**
 * 틀린 코드
 * function solution(a, b) {
    var answer = 0;
    let primes = [];
    let prime = 2;
    let gcd = 1;
    for (let i = 2; i <= Math.min(a, b); i++) {
      if (a % i === 0 && b % i === 0) gcd = i;
    }
    b /= gcd;

    while (b !== 1) {
      console.log(b);
      if (b % prime === 0) {
        primes.push(prime);
        while (b % prime === 0) b /= prime;
      }
      prime++;
    }
    console.log(primes);
    return answer;
  }
 */

// 풀이 참고
console.log(solution(7, 20));
