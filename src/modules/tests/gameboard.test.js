import { Gameboard } from "../gameboard.js";

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = Gameboard();
  });

  test("Gameboard should create an object with correct properties", () => {
    expect(gameboard).toMatchObject({
      misses: expect.any(Array),
      hits: expect.any(Array),
      allSunk: expect.any(Boolean),
      grid: expect.any(Array),
      ships: expect.any(Array),
      receiveAttack: expect.any(Function),
      checkIfHit: expect.any(Function),
      randomMove: expect.any(Function),
      checkIfExistingMove: expect.any(Function),
      allShipsSunk: expect.any(Function),
      initGrid: expect.any(Function),
      setShipLocation: expect.any(Function),
    });
  });

  test("Verify an array of 5 ships gets created", () => {
    expect(gameboard.ships).toHaveLength(5);
  });

  test("All ships sunk is true after 17 total hits", () => {
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

    gameboard.hits.push(...hits);
    gameboard.allShipsSunk();

    expect(gameboard.allSunk).toBe(true);
    expect(gameboard.hits).toHaveLength(17);
  });

  test("Receive attack and return 'not hit' if missed", () => {
    const result = gameboard.receiveAttack([0, 0]);

    expect(result).toBe("not hit");
    expect(gameboard.misses).toContainEqual([0, 0]);
  });

  test("Receive attack and return 'hit' if ship is hit", () => {
    // place ship at [0,0]
    gameboard.setShipLocation(gameboard.ships[4], [
      [0, 0],
      [0, 1],
    ]);

    const result = gameboard.receiveAttack([0, 0]);

    expect(result).toBe("hit");
    expect(gameboard.hits).toContainEqual([0, 0]);
  });

  test("generates random coordinate", () => {
    let move = gameboard.randomMove();

    expect(Array.isArray(move)).toBe(true);
    expect(move.length).toBe(2);
  });

  test("random coordinate is in playable area", () => {
    let move = gameboard.randomMove();

    expect(move[0]).toBeLessThan(10);
    expect(move[0]).toBeGreaterThan(0);
    expect(move[1]).toBeLessThan(10);
    expect(move[1]).toBeGreaterThan(0);
  });
});
