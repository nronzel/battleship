import { Ship } from "../ship.js";

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = Ship("carrier", 5);
  });

  test("Create an object with the correct properties", () => {
    expect(ship).toMatchObject({
      name: "carrier",
      length: 5,
      numberOfHits: 0,
      location: expect.any(Array),
      hit: expect.any(Function),
      isSunk: expect.any(Function),
      setLocation: expect.any(Function),
    });
  });

  test("hit() method should increment the number of hits", () => {
    expect(ship.numberOfHits).toBe(0);
    ship.hit();
    expect(ship.numberOfHits).toBe(1);
    ship.hit();
    expect(ship.numberOfHits).toBe(2);
  });

  test("isSunk() method should return true if the ship is sunk", () => {
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test("setLocation() method should add coordinates to the ship location", () => {
    expect(ship.location).toHaveLength(0);
    ship.setLocation([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ]);
    expect(ship.location).toEqual([
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
    ]);
  });
});
