/* 배열 두 배 만들기
  문제 설명: 정수 배열 numbers가 매개변수로 주어집니다. 
          numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
  var answer = [];
  answer = numbers.map((x) => {
    return x * 2;
  });
  return answer;
}
