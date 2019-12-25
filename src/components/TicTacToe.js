import React from 'react';
import GameBoard from './GameBoard';
import useTicTacToe from '../hooks/useTicTacToe';
import InfoBoard from './InfoBoard';
import './styles.css';

const TicTacToe = () => {
  const {
    winsCount,
    drawsCount,
    restart,
    isFinished,
    isPlayersTurn,
    board,
    onClick
  } = useTicTacToe();

  return (
    <div className="container">
      <GameBoard { ...{ board, onClick } } />
      <InfoBoard { ...{
        winsCount,
        drawsCount,
        restart,
        isFinished,
        isPlayersTurn } }
      />
    </div>
  );
};

export default TicTacToe;
