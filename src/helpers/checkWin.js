import checkStraightLines from './checkStraightLines';
import checkCrossLines from './checkCrossLines';

function checkWin(matrix, player, opponent) {
  const hasStraight = checkStraightLines(matrix, player, opponent);
  const hasCross = checkCrossLines(matrix, player, opponent);
  return hasStraight || hasCross;
}

export default checkWin;
