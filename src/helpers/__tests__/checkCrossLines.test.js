import checkCrossLines from '../checkCrossLines';

describe('checkCrossLines', () => {
  it('returns true if any cross line has player character', () => {
    const board = [
      ['x', 'o', 'o'],
      [null, 'x', null],
      [null, null, 'x'],
    ];
    expect(checkCrossLines(board, 'x', 'o')).toBe(true);
  });

  it('returns false if any cross line has opponents character', () => {
    const board = [
      ['x', 'x', 'o'],
      ['x', 'o', null],
      ['o', null, null],
    ];
    expect(checkCrossLines(board, 'x', 'o')).toBe(false);
  });

  it('returns undefined if cross lines neither has player nor has opponent characters', () => {
    const board = [
      ['x', 'o', 'x'],
      ['x', 'o', null],
      ['o', null, null],
    ];
    expect(checkCrossLines(board, 'x', 'o')).toBe(undefined);
  });
});
