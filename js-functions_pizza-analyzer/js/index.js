console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here

  const pizzaSize1 = pizzaInput1.value
  const pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
  updatePizzaDisplay(pizza1 , pizzaInput1.value)
  updateOutputColor(pizzaSize1,pizzaSize2)
  
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  const pizzaSize1 = pizzaInput1.value
  const pizzaSize2 = pizzaInput2.value
  calculatePizzaGain(pizzaSize1, pizzaSize2)
  updatePizzaDisplay(pizza2 , pizzaInput2.value)
  // updateOutputColor(pizzaSize1,pizzaSize2) 
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1 ,diameter2) {
   let area1 ;
   let area2 ;
   area1 = ((diameter1/2)**2)*Math.PI;
   area2 = ((diameter2/2)**2)*Math.PI;
   let gain;
   gain = ((area2 - area1) / area1) * 100 ; 
   output.textContent= Math.round(gain);
  //  console.log("Area of pizza 1 :" , area1);
  //  console.log("Area of pizza 2 :" , area2);
}
/* to test function just call it*/
// calculatePizzaGain(10,20)

  
// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay( pizzaElement, newSize) {
  let displayNewSize = newSize / 24 * 100 ;
  pizzaElement.style.width = displayNewSize + "px";

}

// Task 3
// define the function updateOutputColor here
function updateOutputColor(x,y) {
  if (x < y) {
    
    outputSection.style.backgroundColor = `green` ;
    
  } else { 
    outputSection.style.backgroundColor = `red` ;

    }
    
 }
