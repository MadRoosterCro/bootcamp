/// firstly I need to tackle like button

const liked = () => {
    const likedPicture = document.querySelector(".like_button>img");
    const like = () => {
        likedPicture.src=`.img/like_full.png`
        likedPicture.className = "liked;"
    }
    const dislike = () => {
        likedPicture.src=`./img/like_empty.png`
        likedPicture.className = "disliked"
    }
    if(likedPicture.classList.contains(`liked`)) {
        dislike();
    }
    else if (likedPicture.classList.contains(`disliked`)) {
        like();
    }
}
const likeButton = document.querySelector(`.like_button`);
likeButton.addEventListener("click", () => {
    liked();
})

/// comment button section
const commentButton = document.querySelector(`.comment_button`);
const newComment = document.querySelector(`.newComment`);
commentButton.addEventListener("click", () => {
    newComment.classList.toggle("hide");
})

