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
