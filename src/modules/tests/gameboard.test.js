import { Gameboard } from "../gameboard.js";

test("tests board object", () => {
  let board = Gameboard();

  expect(board.allSunk).toBe(false);

  expect(board).toHaveProperty("initBoard");
});

test("verifies board gets created", () => {
  let board = Gameboard();
  board.initBoard();
  expect(board.board).toHaveLength(10);
});

test("all ships sunk is true after 17 total hits", () => {
  let board = Gameboard();
  let hits = [
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
    [1, 9],
    [2, 2],
    [2, 3],
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
    [2, 8],
    [2, 9],
    [0, 0],
  ];
  board.moves.hits.push(...hits);
  board.allShipsSunk();
  expect(board.allSunk).toBe(true);
  expect(board.moves.hits).toHaveLength(17);
});
