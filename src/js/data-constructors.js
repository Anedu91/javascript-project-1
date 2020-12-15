//Dino Constructor

function Dinosaur(spicies, weight, height, diet, where, when, fact) {
  /* Properties */
  this.species = spicies;
  this.weight = weight;
  this.height = height;
  this.diet = diet;
  this.where = where;
  this.when = when;
  this.fact = fact;

  /* Methods */
  this.compareWeight = () => {
    const total = Math.round(this.weight / this.humanWeight);
    if (total > 1) {
      const compare = `${this.species} is ${total} times bigger than ${this.humanName}`;
      return compare;
    } else if (total === 1) {
      const compare = `${this.species} and ${this.humanName} has the same weight`;
      return compare;
    } else {
      const compare = `${this.humanName} is bigger than ${this.species}`;
      return compare;
    }
  };
  this.compareHeight = () => {
    const total = Math.round(this.height / this.humanHeight);
    if (total > 1) {
      const compare = `${this.species} is ${total} times larger than ${this.humanName}`;
      return compare;
    } else if (total === 1) {
      const compare = `${this.species} and ${this.humanName} has the same height`;
      return compare;
    } else {
      const compare = ` ${this.humanName} is larger than ${this.species}`;
      return compare;
    }
  };
  this.compareDiet = () => {
    if (this.diet === this.humanDiet) {
      const compare = `${this.species} has the same diet as ${this.humanName}`;
      return compare;
    } else {
      const compare = `${this.species} is ${this.diet}, and ${this.humanName} is ${this.humanDiet}`;
      return compare;
    }
  };
  this.whereMethod = () => {
    const where = `${this.species} lived in ${this.where}`;
    return where;
  };
  this.whenMethod = () => {
    const when = `${this.species} lived in ${this.when}`;
    return when;
  };
  this.factMethod = () => {
    const fact = `Another fact about ${this.species} is ${this.fact}`;
    return fact;
  };

  this.random = () => {
    //The same fact for Pigeon
    if (this.species === "Pigeon") {
      return this.fact;
    } else {
      // Random number 0-5
      const random = Math.floor(Math.random() * 6);

      switch (random) {
        case 0:
          return this.compareWeight();
        case 1:
          return this.compareHeight();
        case 2:
          return this.compareDiet();
        case 3:
          return this.whereMethod();
        case 4:
          return this.whenMethod();
        case 5:
          return this.factMethod();
        default:
          console.log("Waiting for random");
      }
    }
  };
}
// Creating instances of Dinos
function createDino(array) {
  const instances = array.map((e) => {
    const dino = new Dinosaur(
      e.species,
      e.weight,
      e.height,
      e.diet,
      e.where,
      e.when,
      e.fact
    );

    return dino;
  });
  return instances;
}

// Creating an human object (factory function)
/* Human Object */
function Human(humanName, humanSize, humanWeight, humanDiet) {
  return {
    humanName,
    humanSize,
    humanWeight,
    humanDiet,
  };
}

export { Dinosaur, createDino, Human };
