console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars=0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const imgs = document.createElement("img");
    if (i <=  filledStars ) {
      
      imgs.src = "assets/star-filled.svg"
     
    } else {
      
      imgs.src = "assets/star-empty.svg"
      
    }
  
    starContainer.append(imgs);
    
  }

}

renderStars();

