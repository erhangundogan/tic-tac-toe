import React from 'react';
import Table from './Table';
import useTicTacToe from '../hooks/useTicTacToe';
import './styles.css';

const TicTacToe = () => {
  const { matrix, onClick } = useTicTacToe();

  return (
    <Table onClick={ onClick } matrix={ matrix } />
  );
};

export default TicTacToe;
