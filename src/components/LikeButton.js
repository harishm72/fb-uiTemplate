import React from "react";

const LikeButton = ({ isLiked, id, likes, HandleLike }) => {
  return (
    <div>
      {likes} Likes
      <button
        className="like-button"
        onClick={() => {
          HandleLike(id);
        }}
      >
        {isLiked ? "UnLike" : "Like"}
      </button>
    </div>
  );
};

export default LikeButton;
