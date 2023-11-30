// Higher Order Functions

// A higher order function is a function that does at least one
// of the following:
// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as the result

// import { posts } from "./posts.js";
// function test() {
//   return;
// }
// const firstOrderFunc = (arg) =>
//   console.log("Hello, I am a First order function" + arg);
// const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
// higherOrder(firstOrderFunc);

// function highMe(f) {
//   return f();
// }

// highMe(me);

// posts.forEach((post) => {
//   console.log(post);
// });
// console.clear();

// const filteredPosts = posts.filter((post) => {
//   return post.userId === 1;
// });
// console.log(filteredPosts);

// const mappedPosts = filteredPosts.map((post) => {
//   return post.id * 10;
// });
// console.log(mappedPosts);

// const reducedPostsValue = mappedPosts.reduce((sum, post) => {
//   return sum + post;
// });
// console.log(reducedPostsValue);

// function add(a, b) {
//   return a + b;
// }

// console.log(add(1, 2));

// const testArr = [11, 15, 6, 8, 9, 10];

// function getResult(arr) {
//   const res = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     res.push(isTrue(arr[i], arr[i + 1]));
//   }
//   return res;
// }

// function isTrue(num1, num2) {
//   const sum = num1 + num2;
//   return sum % 2 == 0 ? true : false;
// }

// console.log(getResult(testArr));

// const add2 = new Function("x", "return x + 2");

// console.log(add2(3));

function createFunctions(num) {
  return new Function("x", `return x + ${num}`);
}

const add2 = createFunctions(2);
console.log(add2(5));

console.log(createFunctions(3)(5));
//console.log(add3);

const add7 = createFunctions(7)(1);
console.log(add7);

// function doLogic(funName, num) {
//   funName = new Function("x", `return x + ${num}`);
//   console.log(funName(3));
// }

// console.log(createFunctions(2));
