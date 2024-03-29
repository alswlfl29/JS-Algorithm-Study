//평행

function solution(dots) {
  const [dot1, dot2, dot3, dot4] = dots;

  const [x1, y1] = dot1;
  const [x2, y2] = dot2;
  const [x3, y3] = dot3;
  const [x4, y4] = dot4;

  if (
    Math.abs(y2 - y1) / Math.abs(x2 - x1) ===
    Math.abs(y3 - y4) / Math.abs(x3 - x4)
  ) {
    return 1;
  }

  if (
    Math.abs(y2 - y3) / Math.abs(x2 - x3) ===
    Math.abs(y1 - y4) / Math.abs(x1 - x4)
  ) {
    return 1;
  }

  if (
    Math.abs(y2 - y4) / Math.abs(x2 - x4) ===
    Math.abs(y1 - y3) / Math.abs(x1 - x3)
  ) {
    return 1;
  }

  return 0;
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);

// ?????
function solution(dots) {
  if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
    return 1;
  if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
    return 1;
  return 0;
}

function calculateSlope(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}
