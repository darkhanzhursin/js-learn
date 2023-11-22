// Higher Order Functions

// A higher order function is a function that does at least one
// of the following:
// ** Takes one or more functions as an argument (parameter)
// ** Returns a function as the result

import { posts } from "./posts.js";

const firstOrderFunc = () => console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

function me() {
  console.log("My name is Darkhan!");
}

function highMe() {
  return f();
}

highMe(me);

posts.forEach((post) => {
  console.log(post);
});
console.clear();

const filteredPosts = posts.filter((post) => {
  return post.userId === 1;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPosts);

const reducedPostsValue = mappedPosts.reduce((sum, post) => {
  return sum + post;
});
console.log(reducedPostsValue);
