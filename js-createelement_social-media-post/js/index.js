console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newpost = document.createElement("article");
newpost.classList.add("body","post");
document.body.append(newpost);


const newpara = document.createElement("p");
newpost.classList.add("body","post__content");
newpost.append(newpara);
newpara.innerHTML=`hbla bla blb asdjkj kasjkdjkskj is`;

const newfooter = document.createElement("footer")
newfooter.classList.add("body","post__footer");
newpost.append(newfooter);

const newspan = document.createElement("span")
newspan.classList.add("body","post__username");
newfooter.append(newspan);
newspan.innerHTML=`@username`

const newButton = document.createElement("button")
newButton.classList.add("body","post__button");
newfooter.append(newButton);
newButton.innerHTML=`♥ Like`






