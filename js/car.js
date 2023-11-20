class Automobile {
  constructor(wheels, engine) {
    this._wheels = wheels;
    this._engine = engine;
  }

  enginize() {
    return `Vvmmmmmmmm! ${this._wheels} and ${this._engine}`;
  }
}

class Car extends Automobile {
  constructor(doors, engine, type, wheels) {
    super(wheels, engine);
    this._doors = doors;
    this._type = type;
  }

  carInfo() {
    return `This car has ${this._doors} doors, ${this._engine} and type of ${this._type}`;
  }
}

class E34 extends Car {
  constructor(model, company, engine, type, edition, doors) {
    super(doors, engine, type);
    this._model = model;
    this._company = company;
    this._edition = edition;
  }

  driveE34() {
    return `This car has following characteristics: 
    ${this._company}, ${this._model}, ${this._edition}, ${this._engine}, ${this._type}`;
  }
}

const e34model = new E34(
  "e34",
  "BMW",
  "motor 4.4 turbo",
  "benzin",
  "Alpina",
  2
);
console.log(e34model.driveE34());
console.log(e34model.carInfo());
console.log(e34model.enginize());
