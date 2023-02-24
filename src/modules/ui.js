import { Ship } from "./ship.js";
import { Player } from "./player.js";
import { Gameboard } from "./gameboard.js";

const createGrid = (container) => {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const gridItem = document.createElement("div");
      gridItem.setAttribute("data-x", j);
      gridItem.setAttribute("data-y", i);
      container.appendChild(gridItem);
    }
  }
};

const createPlayerBoards = () => {
  const playerBoard = document.getElementById("Player");
  const cpuBoard = document.getElementById("Cpu");

  createGrid(playerBoard);
  createGrid(cpuBoard);
};

export { createPlayerBoards };
