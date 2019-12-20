import React from 'react';
import { render } from '@testing-library/react';
import InfoBoard from '../InfoBoard';

describe('InfoBoard', () => {
  it('renders', () => {
    const props = {
      isPlayersTurn: true,
      isFinished: false,
      winsCount: { x: 2, o: 0 },
      drawsCount: 1,
      restart: jest.fn()
    };
    const { container } = render(
      <InfoBoard { ...props } />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
