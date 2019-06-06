import React from 'react';

const LikeButton = ({ isLiked, id, likes, HandleLike }) => {

    const handleLike = () => {
        HandleLike(id)
    }
    return (
        <div>
            {likes} Likes
                <button className="like-button" onClick={handleLike}>{isLiked ? "UnLike" : "Like"}</button>
        </div>
    )
}

export default LikeButton;