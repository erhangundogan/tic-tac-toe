import { useState, useEffect } from 'react';
import { isDraw, isWin } from '../helpers/play';

const initial = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function useTicTacToe() {
  const [matrix, setMatrix] = useState(() => initial.map(item => item.slice()));
  const [isX, setIsX] = useState(false);

  useEffect(() => {
    const clearTable = () => {
      setMatrix(() => initial.map(item => item.slice()));
      setIsX(false);
    };

    if (isWin(matrix, isX)) {
      alert(`${ isX ? 'x' : 'o' } wins!`);
      clearTable();
      return;
    }
    if (isDraw(matrix)) {
      alert('Draw!');
      clearTable();
      return;
    }
    setIsX(!isX);
  }, [matrix]);

  const onClick = (event) => {
    const [row, col] = event.target.id;
    if (matrix[row][col]) {
      console.log('select another cell!');
      return;
    }
    const nm = [...matrix];
    nm[row][col] = isX ? 'x' : 'o';
    setMatrix(nm);
  };

  return { matrix, onClick };
}

export default useTicTacToe;
