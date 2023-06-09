// console.clear();

import getRandomColor from "../../utils/randomColor.js";
import createCircle from "../../components/Circle/Circle.js";
import createPentagon from "../../components/Pentagon/Pentagon.js";
const root = document.getElementById("root");

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getRandomColor();
});

// const pentagon = document.createElement("div");
// pentagon.classList.add("pentagon");
// pentagon.addEventListener("click", () => {
//   pentagon.style.backgroundColor = getRandomColor();
// });

let circle = createCircle();
let pentagon = createPentagon();
root.append(circle, square, pentagon);
