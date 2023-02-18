import { Ship } from "../ship.js";

test("Hit always increments by 1", () => {
  let ship = Ship("test", 3);
  ship.hit();
  ship.hit();
  expect(ship.numberOfHits).toBe(2);
});

test("Ship will sink", () => {
  let ship = Ship("test", 3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("Ship accepts coords", () => {
  let ship = Ship("test", 3);
  ship.setLocation([
    [1, 2],
    [1, 3],
    [1, 4],
  ]);
  expect(ship.location).toHaveLength(3);
  expect(ship.location).toEqual([
    [1, 2],
    [1, 3],
    [1, 4],
  ]);
});
