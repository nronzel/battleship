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

test("generates random x & y coord", () => {
  let cpu = Player("CPU", true);
  let move = cpu.getRandomMove();
  expect(Array.isArray(move)).toBe(true);
  expect(move).toHaveLength(2);
});

test("random x & y are under 10", () => {
  let cpu = Player("CPU", true);
  let move = cpu.getRandomMove();
  expect(move[0]).toBeLessThan(10);
  expect(move[1]).toBeLessThan(10);
});
