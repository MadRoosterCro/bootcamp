/// firstly I need to tackle like button

const liked = () => {
  const likedPicture = document.querySelector(".like_button>img");
  const like = () => {
    likedPicture.src = `.img/like_full.png`;
    likedPicture.className = "liked;";
  };
  const dislike = () => {
    likedPicture.src = `./img/like_empty.png`;
    likedPicture.className = "disliked";
  };
  if (likedPicture.classList.contains(`liked`)) {
    dislike();
  } else if (likedPicture.classList.contains(`disliked`)) {
    like();
  }
};
const likeButton = document.querySelector(`.like_button`);
likeButton.addEventListener("click", () => {
  liked();
});

/// comment button section
const commentButton = document.querySelector(`.comment_button`);
const newComment = document.querySelector(`.newComment`);
commentButton.addEventListener("click", () => {
  newComment.classList.toggle("hide");
});

/// adding new comments to the picture

let commentId = 0;
const user = "Mad_Rooster";
let userComment = "This is an amazing bike!";
const addComment = () => {
  const commentContent = document.querySelector(`textarea`).value;
  const structure = document.createElement(`div`);
  structure.id = commentId++;
  commentId = parseInt(structure.id);
  structure.classList.add("comment");
  structure.innerHTML = `
    <em>
    <h3>${user}</h3>
    <p>${commentContent}</p>
    </em>`;
  return structure;
};

/// submitting or canceling comments