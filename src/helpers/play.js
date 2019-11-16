// function minmax(matrix, depth, isMaxPlayer) {
//   if (isMaxPlayer) {
//     let bestValue = -Infinity;
//     for (let r = 0; r < 3; r++) {
//       for (let c = 0; c < 3; c++) {
//         let value = minmax(matrix, depth + 1, false);
//         bestValue = bestValue > value ? bestValue : value;
//       }
//     }
//   } else {
//     let bestValue = +Infinity;
//     for (let r = 0; r < 3; r++) {
//       for (let c = 0; c < 3; c++) {
//         let value = minmax(matrix, depth + 1, true);
//         bestValue = bestValue < value ? bestValue : value;
//       }
//     }
//   }
// }

function checkCrossLines(matrix, char) {
  let count = 0;
  for (let r = 0; r < 3; r++) {
    if (matrix[r][r] === char) {
      count += 1;
    }
  }
  if (count === 3) {
    return true;
  }
  count = 0;
  let col = 0;
  for (let r = 2; r >= 0; r--) {
    if (matrix[r][col] === char) {
      count += 1;
    }
    col += 1;
  }
  return count === 3;
}

function checkStraightLines(matrix, char, isRows) {
  for (let r = 0; r < 3; r++) {
    let count = 0;
    for (let c = 0; c < 3; c++) {
      if (isRows && matrix[r][c] === char) {
        count += 1;
      } else if (!isRows && matrix[c][r] === char) {
        count += 1;
      }
    }
    if (count === 3) {
      return true;
    }
  }
  return false;
}

export function isWin(matrix, isX) {
  const char = isX ? 'x' : 'o';
  const hasRow = checkStraightLines(matrix, char, true);
  const hasCol = checkStraightLines(matrix, char, false);
  const hasCross = checkCrossLines(matrix, char, false);
  return hasRow || hasCol || hasCross;
}

export function isDraw(matrix) {
  let hasEmptyCell = false;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (matrix[r][c] === null) {
        hasEmptyCell = true;
        break;
      }
    }
  }
  return !hasEmptyCell;
}
