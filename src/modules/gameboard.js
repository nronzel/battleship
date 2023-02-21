import { Ship } from "./ship.js";

const Gameboard = () => {
  let gameboard = Object.create(gameboardActions);
  gameboard.moves = { misses: [], hits: [] };
  gameboard.allSunk = false;
  gameboard.grid = [];
  gameboard.ships = [
    Ship("carrier", 5),
    Ship("battleship", 4),
    Ship("submarine", 3),
    Ship("destroyer", 3),
    Ship("patrol", 2),
  ];

  return gameboard;
};

const gameboardActions = {
  receiveAttack(coords) {
    // check against the moves already done and return if it has already been guessed
    if (this.checkIfMoveExists(coords)) return "move exists";

    // check if guess results in a hit
    if (this.checkIfHit(coords)) return "hit";

    this.moves.misses.push(coords);

    return console.log("not hit");
  },

  checkIfHit(coords) {
    let result = false;

    this.ships.forEach((ship) => {
      ship.location.some((location) => {
        if (location[0] === coords[0] && location[1] === coords[1]) {
          // hit actions are performed here rather than in receiveAttack to prevent
          // having to loop through the ships twice
          ship.hit();
          this.moves.hits.push(coords);
          result = true;
        }
      });
    });
    return result;
  },

  checkIfMoveExists(coords) {
    let result = false;

    for (const moves in this.moves) {
      this.moves[moves].some((coord) => {
        if (coord[0] === coords[0] && coord[1] === coords[1]) result = true;
      });
    }

    return result;
  },

  allShipsSunk() {
    if (this.moves.hits.length === 17) {
      this.allSunk = true;
      return console.log("all sunk, game over");
    }
  },

  initGrid() {
    // create 10 x 10 grid with coordinates
    // [main [column [square]]]
    for (let i = 0; i < 10; i++) {
      let row = [];
      this.grid.push(row);
      for (let j = 0; j < 10; j++) row.push([i, j]);
    }
  },

  setShipLocation(ship, coords) {
    this.ships.forEach((object) => {
      if (object.name === ship.name) {
        object.setLocation(coords);
      }
    });
  },
};

export { Gameboard };
