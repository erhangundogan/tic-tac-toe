function checkCrossLines(b, player, opponent) {
  if (b[0][0] === b[1][1] && b[1][1] === b[2][2]) {
    if (b[0][0] === player) {
      return true
    } else if (b[0][0] === opponent) {
      return false
    }
  }

  if (b[0][2] === b[1][1] && b[1][1] === b[2][0]) {
    if (b[0][2] === player) {
      return true
    } else if (b[0][2] === opponent) {
      return false
    }
  }
}

export default checkCrossLines;
