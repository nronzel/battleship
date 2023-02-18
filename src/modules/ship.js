const Ship = (length) => {
  let numberOfHits = 0;
  let ship = Object.create(shipActions);
  ship.length = length;
  ship.numberOfHits = numberOfHits;

  return ship;
};

const shipActions = {
  hit() {
    return this.numberOfHits++;
  },
  isSunk() {
    return this.numberOfHits === this.length ? true : false;
  },
};

export { Ship };
