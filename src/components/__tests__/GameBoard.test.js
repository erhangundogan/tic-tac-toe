import React from 'react';
import { render } from '@testing-library/react';
import GameBoard from '../GameBoard';

describe('GameBoard', () => {
  it('renders', () => {
    const onClick = jest.fn();
    const board = [
      ['x', 'o', null],
      [null, null, null],
      [null, null, null],
    ];
    const { container } = render(
      <GameBoard board={ board } onClick={ onClick } />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
