import { Gameboard } from "./gameboard.js";

const Player = (name, isCpu = false) => {
  if (isCpu) {
    return {
      name,
      board: Gameboard(),
      isCpu,
    };
  }

  return {
    name,
    board: Gameboard(),
    isCpu,
  };
};

export { Player };
