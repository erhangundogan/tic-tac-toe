import React from 'react';

const GameBoard = ({ board, onClick }) => {
  const row = (items, ri) => (
    <tr key={ ri }>
      {
        items.map(
          (item, ci) => {
            const id = ri + '' + ci;
            return (<td className="cell" id={ id } key={ id }>{ item }</td>);
          }
        )
      }
    </tr>
  );

  return (
    <div>
      <div className="col-numbers">
        <div>0</div>
        <div>1</div>
        <div>2</div>
      </div>
      <div className="row-numbers-and-board">
        <div className="row-numbers">
          <div>0</div>
          <div>1</div>
          <div>2</div>
        </div>
        <table className="board" onClick={ onClick }>
          <tbody id="board">
            { board.map((r, i) => row(r, i)) }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GameBoard;
