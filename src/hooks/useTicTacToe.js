import { useState, useEffect } from 'react';
import checkWin from '../helpers/checkWin';
import findBestMove from '../helpers/minimax';
import isMovesLeft from '../helpers/isMovesLeft';

const initial = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const cloneMultiArray = (array) => array.map(item => item.slice());

function useTicTacToe() {
  const [board, setBoard] = useState(() => cloneMultiArray(initial));
  const [isPlayersTurn, setPlayersTurn] = useState(true);
  const [winsCount, setWinsCount] = useState({ x: 0, o: 0 });
  const [drawsCount, setDrawsCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const restart = () => {
    setBoard(() => cloneMultiArray(initial));
    setIsFinished(false);
    setPlayersTurn(!isPlayersTurn);
  };

  useEffect(() => {
    const player = isPlayersTurn ? 'x' : 'o';
    const opponent = isPlayersTurn ? 'o' : 'x';

    const checkStatus = () => {
      if (checkWin(board, player, opponent)) {
        console.log(`${ isPlayersTurn ? 'X' : 'O' } wins!`);
        setWinsCount({ x: winsCount.x + (isPlayersTurn && 1), o: winsCount.o + (!isPlayersTurn && 1) });
        return setIsFinished(true);
      }
      if (!isMovesLeft(board)) {
        console.log('Draw!');
        setDrawsCount(drawsCount + 1);
        return setIsFinished(true);
      }
      return false;
    };

    if (checkStatus() === false) {
      if (isPlayersTurn === false) {
        const { row, col } = findBestMove(cloneMultiArray(board));
        board[row][col] = 'o';
        setBoard(board);
        if (checkStatus() === false) {
          setPlayersTurn(!isPlayersTurn);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board, isPlayersTurn]);

  const onClick = (event) => {
    if (event.target.id === 'board') {
      return;
    }

    const [row, col] = event.target.id;
    if (board[row][col]) {
      alert('Please select another cell!');
      return;
    }
    board[row][col] = isPlayersTurn ? 'x' : 'o';
    setBoard(board);
    setPlayersTurn(!isPlayersTurn);
  };

  return { winsCount, drawsCount, restart, isFinished, isPlayersTurn, board, onClick };
}

export default useTicTacToe;
