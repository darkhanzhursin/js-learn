// Javascript Classes
class ClassName {}

class Pizza {
  constructor(pizzaType, size) {
    this._type = pizzaType;
    this._size = size;
    this._crust = "original";
    this._toppings = [];
  }

  // as a function
  getSize() {
    return this._size;
  }
  setSize(size) {
    this._size = size;
  }

  getToppings() {
    return this._toppings;
  }

  setToppings(topping) {
    this._toppings.push(topping);
  }

  // as a property
  get pizzaCrust() {
    return this.crust;
  }
  set pizzaCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  bake() {
    console.log(
      `Baking a ${this._size} ${this._crust} ${this._type} crust pizza.`
    );
  }
}

// const myPizza = new Pizza("margarita", "small");
// myPizza.bake();

// myPizza.pizzaCrust = "sausage"; // property
// console.log(myPizza.pizzaCrust);

// myPizza.setSize("large"); // function
// console.log(myPizza.getSize());

// myPizza._size = "medium"; // bad practice

class Pepperony extends Pizza {
  #sauce = "tradititonal"; // kazakh
  constructor(pizzaType, isItalian, sauce, size) {
    super(pizzaType, size);
    this.#sauce = sauce;
    this._isItalian = isItalian;
    //this.#sauce = sauce;
  }

  getSauce() {
    return this.#sauce;
  }

  setSauce(sauce) {
    this.#sauce = sauce;
  }

  slice() {
    console.log(`Our ${this._type} ${this.#sauce} pizza has 10 slices.`);
    if (this._isItalian) {
      console.log("It is from Italy!");
    }
  }
}

// const pepperony = new Pepperony("pepperoni", true);
// pepperony.setSauce("american");
// pepperony.slice();

const kazakhPizza = new Pepperony("pepperoni", false, "kazakh");
kazakhPizza.setSize("medium");
console.log(kazakhPizza);
kazakhPizza.setSauce("american");
kazakhPizza.slice();
