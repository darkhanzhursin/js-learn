// JS Event Listeners

// console.log("Hello");
// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// Syntax: addEventListener(event, function, useCapture);

// const doSomething = () => {
//   alert("doing something");
// };

// h2.addEventListener("click", doSomething, false); // 1st variant
// h2.removeEventListener("click", doSomething, false);

// h2.addEventListener("click", (e) => {
//   console.log(e.target);
//   e.target.textContent = "Clicked!";
// });

document.addEventListener("readystatechange", (evt) => {
  if (evt.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      view.classList.toggle("green");
      view.classList.toggle("darkblue");
    },
    false
  );

  div.addEventListener(
    "mouseenter",
    (event) => {
      div.classList.toggle("blue");
      div.classList.toggle("black");
    },
    false
  );

  h2.addEventListener(
    "dblclick",
    (event) => {
      const myText = event.target.textContent;
      myText === "My 2nd View"
        ? (event.target.textContent = "Clicked!")
        : (event.target.textContent = "My 2nd View");
    },
    false
  );

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseenter", (e) => {
    e.target.classList.toggle("height100");
  });
  nav.addEventListener("mouseout", (e) => {
    e.target.classList.remove("height100");
  });

  const view3 = document.querySelector("#view3");
  const myForm = view3.querySelector("#myForm");
  myForm.addEventListener("keydown", (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    console.log("submit event");
  });

  const myBtn = myForm.querySelector(".btn");
  myBtn.addEventListener("click", (e) => {
    console.log("Button clicked!");
  });
};
