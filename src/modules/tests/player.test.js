import { Player } from "../player.js";

describe("Player", () => {
  let player;
  let cpu;

  beforeEach(() => {
    player = Player("Player 1");
    cpu = Player("CPU", true);
  });

  test("Create player with correct properties", () => {
    expect(player).toMatchObject({
      name: "Player 1",
      board: expect.any(Object),
      isCpu: false,
    });
  });

  test("Create CPU with correct properties", () => {
    expect(cpu).toMatchObject({
      name: "CPU",
      board: expect.any(Object),
      isCpu: true,
    });
  });
});
