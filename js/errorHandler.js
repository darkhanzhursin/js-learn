// JavaScript Errors and Error Handling
// const makeError = () => {
//   try {
//     console.log("Begin");
//     throw new MyCustomError();
//   } catch (err) {
//     console.warn(err);
//   } finally {
//     console.log("... finally");
//   }
// };

// class MyCustomError extends Error {
//   constructor() {
//     super();
//     this.message = "Bil owibka durys emes parametler qoldangan kezde bolady"; // (1)
//     this.name = "MyCustomError"; // (2)
//     this.stack = `Our custom stack ${this.name} : ${this.message}`;
//   }
// }

function myErrorFunction(message) {
  this.message = message;
  this.name = "My Function Error";
  this.stack = `Our custom ${this.name} : ${this.message}`;
}

// makeError();

// function checkForInt(num) {
//   try {
//     if (typeof num === "number") {
//       return "This is a number!";
//     }
//     throw new myErrorFunction("This is not a number!");
//   } catch (err) {
//     return err;
//   }
// }

// console.log(checkForInt({ a: 21 }));

function bolu(param1, param2) {
  try {
    if (param2 === 0) {
      throw new MyError("Divided number should not be ZERO!");
    }
    return param1 / param2;
  } catch (err) {
    console.log(err.message);
  }
}

console.log(bolu(10, 0));

// function checkForIntWithoutTry(num) {
//   if (typeof num === "number") {
//     return "This is a number!";
//   }
//   throw new myErrorFunction("This is not a number!");
// }

// //makeError();
// console.log(checkForInt("Shyqpaidy"));
// //console.log(checkForIntWithoutTry("Shyqpaidy"));
// console.log("Continue");
