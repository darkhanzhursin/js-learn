// Modules

"use strict";
import * as Guitars from "./guitars";
import User from "./user.js";

const me = new User("myemail@email.com", "Darkhan");
console.log(me);

console.log(Guitars.playGuitar());
console.log(Guitars.plucking());
