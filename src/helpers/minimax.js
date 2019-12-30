import checkCrossLines from './checkCrossLines';
import checkStraightLines from './checkStraightLines';
import hasMovesLeft from './hasMovesLeft';

const player = 'x';
const opponent = 'o';

function evaluate(b) {
  const hasStraightLine = checkStraightLines(b, player, opponent);
  if (hasStraightLine === true) {
    return +10;
  } else if (hasStraightLine === false) {
    return -10;
  }

  const hasCrossLine = checkCrossLines(b, player, opponent);
  if (hasCrossLine === true) {
    return +10;
  } else if (hasCrossLine === false) {
    return -10;
  }

  return 0;
}

function minimax(board, depth, isMax) {
  const score = evaluate(board);

  if (score === 10 || score === -10) {
    return score;
  }

  if (hasMovesLeft(board) === false) {
    return 0;
  }

  if (isMax) {
    let best = -1000;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === null) {
          board[i][j] = player;
          best = Math.max(best, minimax(board, depth + 1, !isMax));
          board[i][j] = null;
        }
      }
    }
    return best;
  } else {
    let best = 1000;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === null) {
          board[i][j] = opponent;
          best = Math.min(best, minimax(board, depth + 1, !isMax));
          board[i][j] = null;
        }
      }
    }
    return best;
  }
}

function findBestMove(board) {
  let bestVal = 1000;
  let bestRow = -1;
  let bestCol = -1;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        board[i][j] = opponent;
        const moveVal = minimax(board, 0, true);
        board[i][j] = null;
        if (moveVal < bestVal) {
          bestRow = i;
          bestCol = j;
          bestVal = moveVal;
        }
      }
    }
  }

  return { row: bestRow, col: bestCol };
}

export default findBestMove;
