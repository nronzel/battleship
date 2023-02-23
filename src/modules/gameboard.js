import { Ship } from "./ship.js";

const Gameboard = () => {
  let gameboard = Object.create(gameboardActions);
  gameboard.misses = [];
  gameboard.hits = [];
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
    if (coords === "random") coords = this.randomMove();

    if (this.checkIfExistingMove(coords)) {
      console.log("Move already done");
      return -1;
    }

    if (this.checkIfHit(coords)) {
      this.allShipsSunk();
      return "hit";
    } else {
      this.misses.push(coords);
      return "not hit";
    }
  },

  checkIfHit(coords) {
    let result = false;

    this.ships.forEach((ship) => {
      ship.location.some((location) => {
        if (location[0] === coords[0] && location[1] === coords[1]) {
          // hit actions are performed here rather than in receiveAttack to prevent
          // having to loop through the ships twice
          ship.hit();
          ship.isSunk();
          this.hits.push(coords);
          result = true;
        }
      });
    });
    return result;
  },

  randomMove() {
    let coords = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    do {
      coords = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
    } while (this.checkIfExistingMove(coords));
    return coords;
  },

  checkIfExistingMove(coords) {
    return (
      this.hits.some(
        (hitCoords) => hitCoords[0] === coords[0] && hitCoords[1] === coords[1]
      ) ||
      this.misses.some(
        (missCoords) =>
          missCoords[0] === coords[0] && missCoords[1] === coords[1]
      )
    );
  },

  allShipsSunk() {
    if (this.hits.length === 17) {
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
    return ship.setLocation(coords);
  },
};

export { Gameboard };
