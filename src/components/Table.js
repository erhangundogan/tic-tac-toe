import React from 'react';

const Table = ({ matrix, onClick }) => {
  const row = (items, ri) =>
    (<tr key={ ri }>
      {
        items.map(
          (item, ci) => {
            const id = ri + '' + ci;
            return (<td className="cell" id={ id } key={ id }>{ item }</td>);
          }
        )
      }
    </tr>);

  return (
    <table border={ 1 } onClick={ onClick }>
      <tbody>
        { matrix.map((r, i) => row(r, i)) }
      </tbody>
    </table>
  );
};

export default Table;
