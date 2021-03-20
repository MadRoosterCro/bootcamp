//first the like button
const liked = () => {
  const likeImg = document.querySelector(".likeButton>img");

  const like = () => {
    likeImg.src = "./img/like_full.png";
    likeImg.className = "liked";
  };
  const dislike = () => {
    likeImg.src = "./img/like_empty.png";
    likeImg.className = "disliked";
  };

  if (likeImg.classList.contains("disliked")) {
    like();
  } else if (likeImg.classList.contains("liked")) {
    dislike();
  }
};

const likeButton = document.querySelector(".likeButton");
likeButton.addEventListener("click", () => {
  liked();
});

//comment button

const commentButton = document.querySelector(".commentButton");
const commentNew = document.querySelector(".newComment");
commentButton.addEventListener("click", () => {
  commentNew.classList.toggle("hide");
});

//adding comments

let commentId;
const userName = "Mad_Rooster";

const addComment = () => {
  const commentContent = document.querySelector("textarea").value;
  const commentStructure = document.createElement("div");
  commentStructure.id = commentId + 1;
  commentId = parseInt(commentStructure.id);
  commentStructure.classList.add("comment");
  commentStructure.innerHTML = `<i>
  <h4>${userName}</h4>
  <p>${commentContent}</p>
  </i>`;
  return commentStructure;
};

// submit and cancel buttons part
const submitButton = document.querySelector(".submit");
const commentsWrapper = document.querySelector(".commentWraper");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newComment = addComment();
  commentsWrapper.appendChild(newComment);
  document.querySelector("textarea").value = "";
  commentNew.classList.toggle("hide");
});

const cancelButton = document.querySelector(".cancel");
cancelButton.addEventListener("click", (event) => {
  event.preventDefault();
  commentNew.classList.toggle("hide");
});
