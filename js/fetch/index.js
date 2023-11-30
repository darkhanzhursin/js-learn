// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables and Async/Await

// Callbacks
// A callback function is a function passed into another function as an argument.
// This function is invoked inside the outer function to complete an action.
// Let's take a simple example of how to use callback function

// function callbackFunction(name) {
//   console.log("Hello " + name);
// }

// function outerFunction(callback) {
//   let name = "Darkhan";
//   callback(name);
// }

// outerFunction(callbackFunction);

// Why do we need callbacks?
// The callbacks are needed because javascript is an event driven language.
// That means instead of waiting for a response javascript will keep executing while listening for other events.
// Let's take an example with the first function invoking an API call(simulated by setTimeout)
// and the next function which logs the message.

// function firstFunction() {
//   // Simulate a code delay
//   setTimeout(function () {
//     console.log("First function called");
//   }, 1000);
// }
// function secondFunction() {
//   console.log("Second function called");
// }
// firstFunction();
// secondFunction();

// As observed from the output, javascript didn't wait for the response of the first function
// and the remaining code block got executed. So callbacks are used in a way to make sure that
// certain code doesn’t execute until the other code finishes execution.

// Output:
// Second function called
// First function called

// Callback hell problem
// Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard
// to read and debug when dealing with asynchronous logic. The callback hell looks like below:

// function firstFunction(parameters, callback) {
//   // do stuff
//   callback();
// }

// firstFunction(param, function () {
//   // do stuff
//   secondFunction(param, function () {
//     // do stuff
//     thirdFunction(param, function () {
//       // do stuff
//     });
//   });
// });

// What is callback in callback?
// You can nest one callback inside in another callback to execute the actions sequentially one by one.
// This is known as callbacks in callbacks.

// loadScript("/script1.js", function (script) {
//   console.log("first script is loaded");

//   loadScript("/script2.js", function (script) {
//     console.log("second script is loaded");

//     loadScript("/script3.js", function (script) {
//       console.log("third script is loaded");
//       // after all scripts are loaded
//     });
//   });
// });

// Promises

// A promise is an object that may produce a single value some time in the future with
// either a resolved value or a reason that it’s not resolved(for example, network error).
// Promises are used to handle asynchronous operations.
// They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.
// 3 states:
// Pending - This is an initial state of the Promise before an operation begins.
// Fulfilled & Resolved - This state indicates that the specified operation was completed.
// Rejected - This state indicates that the operation did not complete. In this case an error value will be thrown.

// A promise must follow a specific set of rules:
// A promise is an object that supplies a standard-compliant .then() method
// A pending promise may transition into either fulfilled or rejected state
// A fulfilled or rejected promise is settled and it must not transition into any other state.
// Once a promise is settled, the value must not change.

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes! Resolved the promise!");
//   } else {
//     reject("No! Rejected the promise!");
//   }
// });

// console.log(myPromise);

// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// const otherPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("resolved!");
//   }, 1000);
// });

// otherPromise.then((val) => {
//   console.log(val);
// });

// myPromise.then((v) => {
//   console.log(v);
// });

// What is promise chaining
// The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.
// Let's take an example of promise chaining for calculating the final result.

// const chaining = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(2), 1000);
// })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 3;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 4; //24
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// chaining;

// In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,
// The initial promise resolves in 1 second,
// After that .then handler is called by logging the result(1) and then return a promise with the value of result * 2.
// After that the value passed to the next .then handler by logging the result(2) and return a promise with result * 3.
// Finally the value passed to the last .then handler by logging the result(6) and return a promise with result * 4.

// Fetch

// const users = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(users); // pending

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((resp) => {
//     return resp.json();
//   })
//   .then((data) => {
//     console.log(data);
//     let counter = 0;
//     data.forEach((user) => {
//       //console.log(user.username);
//       //user.address.zipcode = "test" + counter++;
//       //console.log(user);
//     });
//   });

// console.log(users);

// Async & Await

// const myUsers = {
//   userList: [],
// };

// const coolFunc = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();
//   //console.log(jsonUserData);
//   return jsonUserData;
// };

// const anotherFunc = async () => {
//   const data = await coolFunc();
//   myUsers.userList = data;
//   console.log(myUsers.userList);
// };

// anotherFunc();

// const getAllUserEmails = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonUserData = await response.json();

//   const userEmailArray = jsonUserData.map((user) => {
//     return user.email;
//   });

//   //console.log(userEmailArray);
//   postToSomewhere(userEmailArray);
// };

// const postToSomewhere = (data) => {
//   console.log(data);
// };

// getAllUserEmails();

// 2nd parameter of Fetch is a object

// const getDadJoke = async () => {
//   const resp = await fetch("https://icanhazdadjoke.com/", {
//     method: "GET",
//     headers: {
//       //Accept: "application/json",
//       Accept: "text/plain",
//     },
//   });
//   //const jsonData = await resp.json();
//   const textData = await resp.text();
//   console.log(textData);
// };

// const jokeObj = {
//   data: {
//     joke: {
//       id: "Qn5JSOTosad",
//       joke: "The birth place of poetry is the notebook, the place of death is the Internet!",
//       permalink: "https://icanhazdadjoke.com/j/Qn5JSOTosad",
//     },
//   },
// };

// const postData = async (obj) => {
//   const data = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   });

//   const jsonResponse = await data.json();

//   console.log(jsonResponse.headers);
// };

//getDadJoke();
//postData(jokeObj);

// const requestJoke = async (city) => {
//   const url = `https://weatherapi-com.p.rapidapi.com/sports.json?q=${city}`;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "d0af399766msh72cfe221789eed1p10afc9jsnc08ecac365da",
//       "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
//     },
//   };
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// requestJoke("London");

console.log([1, 2, 3].shift());
