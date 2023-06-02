console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit" , (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    console.log("formData", formData);
    const data = Object.fromEntries(formData);
    console.log("data", data);

})
