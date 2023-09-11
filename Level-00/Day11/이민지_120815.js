/* 피자 나눠 먹기 (2)
  문제 설명: 머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 
          피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/
function solution(n) {
  var answer = 0;
  let pizza = 6;
  while (pizza % n !== 0) {
    pizza += 6;
  }
  answer = parseInt(pizza / 6);
  return answer;
}

console.log(solution(3));

/**
 * 풀이 참고
 * 6조각으로 나눠 떨어질때까지 6을 더해 나감
 * 그 후 마지막에 6으로 나눠 피자 박스 값 반환
 */
