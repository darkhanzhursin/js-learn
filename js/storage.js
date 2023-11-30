// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied

/* Web storage is an API that provides a mechanism by which browsers can store key/value 
pairs locally within the user's browser, in a much more intuitive fashion than using cookies. 
The web storage provides two mechanisms for storing data on the client.

Local storage: It stores data for current origin with no expiration date.
Session storage: It stores data for one session and the data is lost when the browser tab is closed.
*/

console.log("Here");

const myArray = ["eat", "code", "sleep"];
const myObject = {
  name: "Darkhan",
  hobbies: ["eat", "code", "sleep"],
  logName: function () {
    console.log(this.name);
  },
};

localStorage.setItem("dara", JSON.stringify(myObject));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStorage"));
console.log(myLocalData);
// localStorage.clear();
// localStorage.removeItem("myLocalStorage");

// The session storage provided methods for reading, writing and clearing the session data
// Save data to sessionStorage
sessionStorage.setItem("key", "value");
sessionStorage.setItem("Kazakhstan", "Astana");

// Get saved data from sessionStorage
let data = sessionStorage.getItem("key");

// Remove saved data from sessionStorage
//sessionStorage.removeItem("key");

// Remove all saved data from sessionStorage
//sessionStorage.clear();
