function checkStraightLines(b, player, opponent) {
  for (let row = 0; row < 3; row++) {
    if (b[row][0] === b[row][1] && b[row][1] === b[row][2]) {
      if (b[row][0] === player) {
        return true;
      } else if (b[row][0] === opponent) {
        return false;
      }
    }
  }

  for (let col = 0; col < 3; col++) {
    if (b[0][col] === b[1][col] && b[1][col] === b[2][col]) {
      if (b[0][col] === player) {
        return true;
      } else if (b[0][col] === opponent) {
        return false;
      }
    }
  }
}

export default checkStraightLines;
