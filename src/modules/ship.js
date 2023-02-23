const Ship = (name, length) => {
  let numberOfHits = 0;
  let ship = Object.create(shipActions);
  ship.name = name;
  ship.length = length;
  ship.numberOfHits = numberOfHits;
  ship.location = [];
  return ship;
};

const shipActions = {
  hit() {
    return this.numberOfHits++;
  },

  isSunk() {
    return this.numberOfHits === this.length;
  },

  setLocation(coords) {
    this.location.push(...coords);
  },
};

export { Ship };
