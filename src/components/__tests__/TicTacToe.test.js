import React from 'react';
import { render } from '@testing-library/react';
import TicTacToe from '../TicTacToe';

describe('TicTacToe', () => {
  it('renders', () => {
    const { container } = render(<TicTacToe />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
