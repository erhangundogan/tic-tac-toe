import hasMovesLeft from '../hasMovesLeft';

describe('hasMovesLeft', () => {
  const player= 'x';
  const board = [
    ['x', 'x', 'o'],
    ['x', 'o', 'o'],
    ['o', 'x', null],
  ];

  it('returns true if there are empty suqares', () => {
    expect(hasMovesLeft(board)).toBe(true)
  });

  it('returns false if there is no empty square', () => {
    board[2][2] = player;
    expect(hasMovesLeft(board)).toBe(false);
  });
});
