// firstly I need to tackle like button

const liked = () => {
  const likedPicture = document.querySelector(`.like_button>img`);
  const like = () => {
    likedPicture.src = `../47-js-pinterest-simple/img/like_full.png`;
    likedPicture.className = `liked;`;
  };
  const dislike = () => {
    likedPicture.src = "../47-js-pinterest-simple/img/like_empty.png";
    likedPicture.className = `disliked`;
  };
  if (likedPicture.classList.contains(`liked`)) {
    dislike();
  } else if (likedPicture.classList.contains(`disliked`)) {
    like();
  }
};
const likeButton = document.querySelector(`.like_button`);
likeButton.addEventListener(`click`, () => {
  liked();
});

// comment button section
const commentButton = document.querySelector(`.comment_button`);
const commentNew = document.querySelector(`.newComment`);
commentButton.addEventListener(`click`, () => {
  commentNew.classList.toggle(`hide`);
});

// adding new comments to the picture

let commentId = 0;
const user = `Mad_Rooster`;
let userComment = `This is an amazing bike!`;
const addComment = () => {
  const commentContent = document.querySelector(`textarea`).value;
  const structure = document.createElement(`div`);
  structure.id = commentId++;
  commentId = parseInt(structure.id);
  structure.classList.add(`comment`);
  structure.innerHTML = `
    <em>
    <h3>${user}</h3>
    <p>${commentContent}</p>
    </em>`;
  return structure;
};

// posting or canceling comments

const submitButton = document.querySelector(`.submit`);
const commentWrapper = document.querySelector(`.comment_wrapper`);
submitButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  const newComment = addComment();
  commentWrapper.appendChild(newComment);
  document.querySelector(`textarea`).value = ``;
  commentNew.classList.toggle(`hide`);
});
const cancelButton = document.querySelector(`.cancel`);
cancelButton.addEventListener(`click`, (event) => {
  event.preventDefault();
  commentNew.classList.toggle(`hide`);
});
