import { Player } from "../player.js";

test("create player", () => {
  let player = Player("P1");

  expect(player).toHaveProperty("board");
  expect(player.isCpu).toBe(false);
});

test("create CPU opponent", () => {
  let cpu = Player("CPU", true);

  expect(cpu).toHaveProperty("getRandomMove");
});

test("CPU generates random moves", () => {
  let cpu = Player("CPU", true);
  cpu.board.misses.push([1, 2], [2, 5]);
  expect(Array.isArray(cpu.getRandomMove())).toBe(true);
});
