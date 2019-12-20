import React from 'react';

const InfoBoard = ({ isPlayersTurn, isFinished, winsCount, drawsCount, restart }) => {
  const getPlayerScoreText = (player) => {
    switch (winsCount[player]) {
      case 0: {
        return `${ player.toUpperCase() } has no winning!`;
      }
      case 1: {
        return `${ player.toUpperCase() } wins 1 time`;
      }
      default: {
        return `${ player.toUpperCase() } wins ${ winsCount[player] } times`;
      }
    }
  };

  const getStatusText = () => {
    if (isFinished) {
      return 'Game has finished!';
    }
    return `${ isPlayersTurn ? 'X' : 'O' }'s turn`;
  };

  return (
    <div className="info">
      <div>{ getStatusText() }</div>
      <div>{ getPlayerScoreText('x') }</div>
      <div>{ getPlayerScoreText('o') }</div>
      <div>{ !!drawsCount && `Draw ${drawsCount} time${drawsCount > 1 ? 's' : ''}` }</div>
      <div>{ isFinished && <button onClick={ restart }>Restart</button> }</div>
    </div>
  );
};

export default InfoBoard;
