import { Gameboard } from "./gameboard.js";

const Player = (name, isCpu = false) => {
  if (isCpu) {
    let cpu = Object.create(cpuActions);

    cpu.name = name;
    cpu.board = Gameboard();
    cpu.isCpu = isCpu;

    return cpu;
  }

  return {
    name,
    board: Gameboard(),
    isCpu,
  };
};

const cpuActions = {
  getRandomMove: () => {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  },
};

export { Player };
