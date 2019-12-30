import checkStraightLines from '../checkStraightLines';

describe('checkStraightLines', () => {
  it('returns true if any straight line has player character', () => {
    const board = [
      ['x', 'x', 'x'],
      [null, 'o', null],
      [null, null, 'o'],
    ];
    expect(checkStraightLines(board, 'x', 'o')).toBe(true);
  });

  it('returns false if any straight line has opponents character', () => {
    const board = [
      ['x', 'x', 'o'],
      ['x', null, 'o'],
      [null, null, 'o'],
    ];
    expect(checkStraightLines(board, 'x', 'o')).toBe(false);
  });

  it('returns undefined if cross lines neither has player nor has opponent characters', () => {
    const board = [
      ['x', 'o', 'x'],
      ['x', 'o', null],
      ['o', null, null],
    ];
    expect(checkStraightLines(board, 'x', 'o')).toBe(undefined);
  });
});
