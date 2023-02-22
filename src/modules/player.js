import { Gameboard } from "./gameboard.js";
import { Ship } from "./ship.js";

const Player = (name, isCpu = false) => {
  if (isCpu) {
    let cpu = Object.create(computerActions);
    cpu.name = name;
    cpu.board = Gameboard();
    cpu.ships = [
      Ship("carrier", 5),
      Ship("battleship", 4),
      Ship("submarine", 3),
      Ship("destroyer", 3),
      Ship("patrol", 2),
    ];

    cpu.isCpu = isCpu;

    return cpu;
  }

  return {
    name,
    board: Gameboard(),
    isCpu,
    ships: [
      Ship("carrier", 5),
      Ship("battleship", 4),
      Ship("submarine", 3),
      Ship("destroyer", 3),
      Ship("patrol", 2),
    ],
  };
};

const computerActions = {
  getRandomMove: (moves) => {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  },
};

export { Player };
