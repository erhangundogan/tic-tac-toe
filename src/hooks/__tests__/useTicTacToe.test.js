import { renderHook, act } from '@testing-library/react-hooks';
import useTicTacToe from '../useTicTacToe';

describe('useTicTacToe hook', () => {
  it('sets up initial values', () => {
    const { result } = renderHook(() => useTicTacToe());
    const {
      winsCount,
      drawsCount,
      restart,
      isFinished,
      isPlayersTurn,
      board,
      onClick,
    } = result.current;

    expect(winsCount).toEqual({ x: 0, o: 0 });
    expect(drawsCount).toBe(0);
    expect(isFinished).toBe(false);
    expect(isPlayersTurn).toBe(true);
    expect(board).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
    expect(restart).toBeInstanceOf(Function);
    expect(onClick).toBeInstanceOf(Function);
  });

  it('player clicks the cell and plays', () => {
    const { result } = renderHook(() => useTicTacToe());
    act(() => {
      result.current.onClick({
        target: {
          id: '00',
        },
      });
    });
    const { board } = result.current;
    expect(board[0][0]).toBe('x');
  });

  it('computer finds the best move and wins', () => {
    const initial = [
      ['x', 'o', 'x'],
      [null, 'o', null],
      [null, null, null],
    ];
    const { result } = renderHook(() => useTicTacToe(initial));
    act(() => {
      result.current.onClick({
        target: {
          id: '10',
        },
      });
    });
    const { isFinished, winsCount } = result.current;
    expect(isFinished).toBe(true);
    expect(winsCount).toEqual({ x: 0, o: 1 });
  });

  it('detects draw and it can restart the game', () => {
    const initial = [
      ['x', 'o', 'x'],
      ['o', 'o', 'x'],
      [null, 'x', 'o'],
    ];
    const { result } = renderHook(() => useTicTacToe(initial));
    act(() => {
      result.current.onClick({
        target: {
          id: '20',
        },
      });
    });
    const { isFinished, drawsCount } = result.current;
    expect(isFinished).toBe(true);
    expect(drawsCount).toBe(1);
    act(() => {
      result.current.restart();
    });

    const { board } = result.current;
    expect(board).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  });
});
