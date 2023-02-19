import { Ship } from "./ship.js";

const Gameboard = () => {
  let gameboard = Object.create(gameboardActions);
  gameboard.moves = { misses: [], hits: [] };
  gameboard.allSunk = false;
  gameboard.board = [];
  gameboard.shipCoords = [];
  gameboard.ships = {
    carrier: Ship("carrier", 5),
    battleship: Ship("battleship", 4),
    submarine: Ship("submarine", 3),
    destroyer: Ship("destroyer", 3),
    patrol: Ship("patrol", 2),
  };

  return gameboard;
};

const gameboardActions = {
  receiveAttack(coords) {
    // check the coords against the coords in the shipCoords array
    // if exists, get the ship and add to hit counter
    console.log("attacked");
    return;
  },

  allShipsSunk() {
    if (this.moves.hits.length === 17) {
      this.allSunk = true;
      return console.log("all sunk, game over");
    }
  },

  initBoard() {
    // create 10 x 10 grid with coordinates
    // [main [column [square]]]
    for (let i = 0; i < 10; i++) {
      let row = [];
      this.board.push(row);
      for (let j = 0; j < 10; j++) row.push([i, j]);
    }
  },

  setShipLocation(ship, location) {
    ship.location = location;

    let locationObj = {
      name: ship.name,
      location: ship.location,
    };

    this.shipCoords.push(locationObj);
  },
};

export { Gameboard };
