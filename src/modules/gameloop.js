import { Ship } from "./ship.js";
import { Player } from "./player.js";
import { Gameboard } from "./gameboard.js";

const mainLoop = () => {
  const player = Player("Player 1");
  const cpu = Player("CPU", true);

  player.board.setShipLocation(player.board.ships[0], [
    [9, 5],
    [9, 6],
    [9, 7],
    [9, 8],
    [9, 9],
  ]);
  player.board.setShipLocation(player.board.ships[1], [
    [6, 6],
    [6, 7],
    [6, 8],
    [6, 9],
  ]);
  player.board.setShipLocation(player.board.ships[2], [
    [4, 2],
    [5, 2],
    [6, 2],
  ]);
  player.board.setShipLocation(player.board.ships[3], [
    [1, 4],
    [2, 4],
    [3, 4],
  ]);
  player.board.setShipLocation(player.board.ships[4], [
    [1, 8],
    [1, 9],
  ]);

  cpu.board.setShipLocation(cpu.board.ships[0], [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
  ]);
  cpu.board.setShipLocation(cpu.board.ships[1], [
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
  ]);
  cpu.board.setShipLocation(cpu.board.ships[2], [
    [3, 1],
    [4, 1],
    [5, 1],
  ]);
  cpu.board.setShipLocation(cpu.board.ships[3], [
    [4, 4],
    [4, 5],
    [4, 6],
  ]);
  cpu.board.setShipLocation(cpu.board.ships[4], [
    [5, 8],
    [5, 9],
  ]);

  do {
    cpu.board.receiveAttack("random");
    player.board.receiveAttack("random");
  } while (player.board.allSunk === false && cpu.board.allSunk === false);

  console.log(player.board.hits.length);
  console.log(cpu.board.hits.length);

  return;
};

export { mainLoop };
