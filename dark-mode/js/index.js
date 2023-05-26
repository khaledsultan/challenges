console.clear();

const mainElement = document.querySelector('[data-js="body"]');

const addDarkMode = document.querySelector('[data-js="dark-mode-button"]');
addDarkMode.addEventListener("click", () => {
    mainElement.classList.add("dark");
    // mainElement.classList.remove("light");
    // mainElement.classList.add("dark");
    
  });

  const addLightMode = document.querySelector('[data-js="light-mode-button"]');
  addLightMode.addEventListener("click", () => {
      mainElement.classList.remove("dark");
    // mainElement.classList.remove("dark");
    // mainElement.classList.add("light");
  });

  
  const addToggleMode = document.querySelector('[data-js="toggle-button"]');
  addToggleMode.addEventListener("click", () => {
      mainElement.classList.toggle("dark");
    // mainElement.classList.remove("dark");
    // mainElement.classList.remove("light");
    // mainElement.classList.add("normal");

    
  });